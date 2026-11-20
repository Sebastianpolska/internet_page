// Cloudflare Worker dla autoryzacji
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);
    const path = url.pathname;

    // Serwuj index.html dla głównej ścieżki
    if (path === '/' || path === '/index.html') {
      const html = await env.ASSETS.fetch(request);
      return new Response(html, {
        headers: { 'Content-Type': 'text/html' },
      });
    }

    if (path === '/api/register' && request.method === 'POST') {
      return await handleRegister(request, env);
    } else if (path === '/api/login' && request.method === 'POST') {
      return await handleLogin(request, env);
    } else if (path === '/api/me' && request.method === 'GET') {
      return await handleMe(request, env);
    } else if (path === '/api/logout' && request.method === 'POST') {
      return await handleLogout(request, env);
    }

    return new Response('Not Found', { status: 404, headers: corsHeaders });
  },
};

async function handleRegister(request, env) {
  try {
    const { email, password, name } = await request.json();

    // Sprawdź czy email już istnieje
    const existingUser = await env.DB.prepare(
      'SELECT id FROM users WHERE email = ?'
    ).bind(email).first();

    if (existingUser) {
      return new Response(JSON.stringify({ error: 'Email już istnieje' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Hash hasła (prosta implementacja - w produkcji użyj bcrypt)
    const hashedPassword = await hashPassword(password);

    // Dodaj użytkownika
    const result = await env.DB.prepare(
      'INSERT INTO users (email, password, name) VALUES (?, ?, ?)'
    ).bind(email, hashedPassword, name).run();

    return new Response(JSON.stringify({ success: true, userId: result.meta.last_row_id }), {
      status: 201,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
}

async function handleLogin(request, env) {
  try {
    const { email, password } = await request.json();

    // Znajdź użytkownika
    const user = await env.DB.prepare(
      'SELECT id, email, password, name FROM users WHERE email = ?'
    ).bind(email).first();

    if (!user) {
      return new Response(JSON.stringify({ error: 'Nieprawidłowe dane logowania' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Sprawdź hasło
    const isValid = await verifyPassword(password, user.password);
    if (!isValid) {
      return new Response(JSON.stringify({ error: 'Nieprawidłowe dane logowania' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Generuj token sesji
    const token = await generateToken();

    // Zapisz sesję
    await env.DB.prepare(
      'INSERT INTO sessions (user_id, token, expires_at) VALUES (?, ?, ?)'
    ).bind(user.id, token, Date.now() + 7 * 24 * 60 * 60 * 1000).run();

    return new Response(JSON.stringify({
      success: true,
      token,
      user: { id: user.id, email: user.email, name: user.name }
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
}

async function handleMe(request, env) {
  try {
    const token = request.headers.get('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return new Response(JSON.stringify({ error: 'Brak tokenu' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Znajdź sesję
    const session = await env.DB.prepare(
      'SELECT s.user_id, s.expires_at, u.email, u.name FROM sessions s JOIN users u ON s.user_id = u.id WHERE s.token = ?'
    ).bind(token).first();

    if (!session || session.expires_at < Date.now()) {
      return new Response(JSON.stringify({ error: 'Nieprawidłowy lub wygasły token' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({
      user: { id: session.user_id, email: session.email, name: session.name }
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
}

async function handleLogout(request, env) {
  try {
    const token = request.headers.get('Authorization')?.replace('Bearer ', '');

    if (token) {
      await env.DB.prepare('DELETE FROM sessions WHERE token = ?').bind(token).run();
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
}

// Prosta funkcja hashowania (w produkcji użyj Web Crypto API lub bcrypt)
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function verifyPassword(password, hash) {
  const hashedPassword = await hashPassword(password);
  return hashedPassword === hash;
}

async function generateToken() {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, b => b.toString(16).padStart(2, '0')).join('');
}
