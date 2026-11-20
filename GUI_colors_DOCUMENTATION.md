# Dokumentacja GUI - Minecraft Datapack Generator

## Jak odtworzyć ten styl GUI

### 1. Tailwind CSS (już zainstalowany w projekcie)

Projekt używa Tailwind CSS v4.0+ z domyślną konfiguracją. Nie potrzebujesz dodatkowej konfiguracji.

### 2. Główne kolory i gradienty

#### Tło strony
```html
<body class="bg-gray-950 text-gray-100">
```
- `bg-gray-950` - bardzo ciemne szare tło (prawie czarne)
- `text-gray-100` - bardzo jasny szary tekst

#### Gradient tła
```html
<div class="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
```
- Gradient od bardzo ciemnego szarego do ciemnego szarego i z powrotem
- Tworzy subtelny efekt głębi

### 3. Karty i kontenery

#### Podstawowa karta
```html
<div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
```
- `bg-gray-900/50` - ciemne szare tło z 50% przezroczystością
- `rounded-xl` - zaokrąglone rogi
- `p-6` - padding 1.5rem (24px)
- `border border-gray-800` - ciemna szara ramka

#### Karta z hover effect
```html
<div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-green-500/50 hover:bg-gray-800/50 transition-all group">
```
- `hover:border-green-500/50` - przy hover ramka zmienia się na zieloną (50% przezroczystości)
- `hover:bg-gray-800/50` - przy hover tło staje się ciemniejsze
- `transition-all` - płynne przejście
- `group` - pozwala na efekty na elementach dzieci

### 4. Przyciski

#### Główny przycisk (zielony)
```html
<button class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors">
  Pobierz
</button>
```
- `px-4 py-2` - padding poziomy i pionowy
- `bg-green-600` - zielone tło
- `hover:bg-green-700` - przy hover ciemniejszy zielony
- `text-white` - biały tekst
- `rounded-lg` - zaokrąglone rogi
- `text-sm font-medium` - mały tekst, średnia grubość
- `transition-colors` - płynne przejście kolorów

#### Przycisk dodatkowy (szary)
```html
<button class="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors">
  Kopiuj
</button>
```
- `bg-gray-800` - ciemne szare tło
- `hover:bg-gray-700` - przy hover nieco jaśniejsze

#### Przycisk aktywny (kategorie)
```html
<button class="px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-green-600 text-white">
  Vanilla
</button>
```

#### Przycisk nieaktywny
```html
<button class="px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-gray-800 text-gray-300 hover:bg-gray-700">
  Vanilla
</button>
```

### 5. Inputy i Selecty

#### Input tekstowy
```html
<input
  type="text"
  class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent"
  placeholder="Szukaj..."
/>
```
- `w-full` - pełna szerokość
- `bg-gray-800` - ciemne szare tło
- `border border-gray-700` - ciemna szara ramka
- `rounded-lg` - zaokrąglone rogi
- `px-4 py-2` - padding
- `text-white` - biały tekst
- `placeholder-gray-500` - szary placeholder
- `focus:ring-2 focus:ring-green-500` - przy focus zielony ring
- `focus:border-transparent` - przy focus ramka staje się przezroczysta

#### Select (dropdown)
```html
<select
  class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
>
  <option value="">Wybierz...</option>
</select>
```

### 6. Tekst i nagłówki

#### Nagłówek główny
```html
<h1 class="text-4xl font-bold text-white">
  Generator Datapacków Minecraft
</h1>
```
- `text-4xl` - bardzo duży tekst
- `font-bold` - pogrubiony
- `text-white` - biały

#### Nagłówek sekcji
```html
<h2 class="text-lg font-semibold text-white">
  Edytor JSON
</h2>
```
- `text-lg` - duży tekst
- `font-semibold` - półpogrubiony
- `text-white` - biały

#### Opis tekstowy
```html
<p class="text-lg text-gray-400">
  Opis tekstu...
</p>
```
- `text-lg` - duży tekst
- `text-gray-400` - szary tekst

#### Mały tekst (etykiety)
```html
<span class="text-sm text-gray-300">
  Etykieta
</span>
```

### 7. Tagi i badge'y

#### Badge kategorii (niebieski - Vanilla)
```html
<span class="text-xs px-2 py-1 rounded bg-blue-900/50 text-blue-400">
  Vanilla
</span>
```
- `text-xs` - bardzo mały tekst
- `px-2 py-1` - mały padding
- `rounded` - zaokrąglone rogi
- `bg-blue-900/50` - niebieskie tło 50% przezroczystości
- `text-blue-400` - niebieski tekst

#### Badge kategorii (fioletowy - Generacja Świata)
```html
<span class="text-xs px-2 py-1 rounded bg-purple-900/50 text-purple-400">
  Generacja Świata
</span>
```

#### Badge kategorii (pomarańczowy - Mody)
```html
<span class="text-xs px-2 py-1 rounded bg-orange-900/50 text-orange-400">
  Mody
</span>
```

#### Badge minimalnej wersji (zielony)
```html
<span class="text-xs bg-green-900/50 text-green-400 px-2 py-1 rounded">
  1.17+
</span>
```

### 8. Linki

#### Link główny
```html
<a href="/" class="text-green-400 hover:text-green-300 text-sm">
  ← Wróć do generatorów
</a>
```
- `text-green-400` - zielony tekst
- `hover:text-green-300` - przy hover jaśniejszy zielony
- `text-sm` - mały tekst

#### Link z ikoną
```html
<a href="..." class="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300">
  <span>📖</span>
  <span>Dokumentacja</span>
</a>
```
- `inline-flex items-center gap-2` - flex z odstępem między elementami

### 9. Nav bar

```html
<nav class="border-b border-gray-800 bg-gray-950/50 backdrop-blur-sm sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <!-- Logo i tytuł -->
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
          <span class="text-white font-bold text-xl">M</span>
        </div>
        <div>
          <h1 class="text-xl font-bold text-white">Minecraft Datapack Generator</h1>
          <p class="text-xs text-gray-400">Generator datapacków dla Java Edition</p>
        </div>
      </div>
      <!-- Linki nawigacyjne -->
      <div class="flex items-center gap-4">
        <a href="/" class="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">
          Generatory
        </a>
      </div>
    </div>
  </div>
</nav>
```
- `border-b border-gray-800` - dolna ramka
- `bg-gray-950/50` - ciemne tło 50% przezroczystości
- `backdrop-blur-sm` - efekt rozmycia tła
- `sticky top-0 z-50` - przylepiony na górze z wysokim z-index
- `max-w-7xl mx-auto` - centrowanie z maksymalną szerokością
- `px-4 sm:px-6 lg:px-8` - responsywny padding
- Logo: gradient od zielonego do emerald

### 10. Grid layout

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  <!-- Karty -->
</div>
```
- `grid-cols-1` - 1 kolumna na mobile
- `md:grid-cols-2` - 2 kolumny na medium screens
- `lg:grid-cols-3` - 3 kolumny na large screens
- `xl:grid-cols-4` - 4 kolumny na extra large screens
- `gap-4` - odstęp między kartami

### 11. Footer

```html
<footer class="border-t border-gray-800 mt-16 py-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
    <p>Tekst stopki</p>
  </div>
</footer>
```
- `border-t border-gray-800` - górna ramka
- `mt-16` - margines górny
- `py-8` - padding pionowy
- `text-center` - centrowany tekst

### 12. Bloki informacyjne (help/info)

#### Info block (niebieski)
```html
<div class="bg-blue-900/20 rounded-xl p-6 border border-blue-800/50">
  <h2 class="text-lg font-semibold text-blue-400 mb-4">Pomoc</h2>
  <p class="text-gray-300">Treść pomocy...</p>
</div>
```
- `bg-blue-900/20` - niebieskie tło 20% przezroczystości
- `border border-blue-800/50` - niebieska ramka 50% przezroczystości
- `text-blue-400` - niebieski nagłówek

#### Error block (czerwony)
```html
<div class="bg-red-900/20 border border-red-800 rounded-lg p-4">
  <p class="text-red-400 text-sm font-medium">Błąd:</p>
  <p class="text-red-300 text-sm mt-1">Szczegóły błędu...</p>
</div>
```

#### Success block (zielony)
```html
<div class="bg-green-900/20 border border-green-800 rounded-lg p-4">
  <p class="text-green-400 text-sm font-medium">Sukces!</p>
</div>
```

### 13. Efekty specjalne

#### Płynne przejścia
```html
<div class="transition-all">
</div>
<div class="transition-colors">
</div>
```

#### Gradient button
```html
<button class="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
  Przycisk
</button>
```

#### Shadow
```html
<div class="shadow-lg">
</div>
<div class="shadow-xl">
</div>
```

### 14. Spacing

```html
<!-- Marginesy -->
<div class="mt-4"> margin-top: 1rem</div>
<div class="mb-4"> margin-bottom: 1rem</div>
<div class="mx-4"> margin-x: 1rem</div>
<div class="my-4"> margin-y: 1rem</div>

<!-- Padding -->
<div class="p-4"> padding: 1rem</div>
<div class="px-4"> padding-x: 1rem</div>
<div class="py-4"> padding-y: 1rem</div>

<!-- Gap (dla flex/grid) -->
<div class="gap-2"> gap: 0.5rem</div>
<div class="gap-4"> gap: 1rem</div>
```

### 15. Responsywność

```html
<!-- Ukrywanie na mobile -->
<div class="hidden md:block">
  Widoczne od medium+
</div>

<!-- Różne paddingy -->
<div class="px-4 sm:px-6 lg:px-8">
  Responsywny padding
</div>

<!-- Różne rozmiary tekstu -->
<div class="text-sm md:text-base lg:text-lg">
  Responsywny tekst
</div>
```

## Podsumowanie kolorów

### Główne kolory
- **Tło**: `gray-950` (bardzo ciemny)
- **Karty**: `gray-900/50` (ciemny z przezroczystością)
- **Tekst główny**: `white` lub `gray-100`
- **Tekst pomocniczy**: `gray-400` lub `gray-300`
- **Ramki**: `gray-800`

### Akcenty
- **Główny akcent**: `green-500` / `green-600` / `green-700`
- **Hover**: `green-300` / `green-400`
- **Focus ring**: `green-500`

### Kategorie
- **Vanilla**: `blue-900/50` tło, `blue-400` tekst
- **Generacja Świata**: `purple-900/50` tło, `purple-400` tekst
- **Mody**: `orange-900/50` tło, `orange-400` tekst

### Stany
- **Info**: `blue-900/20` tło, `blue-800/50` ramka, `blue-400` tekst
- **Error**: `red-900/20` tło, `red-800` ramka, `red-400` tekst
- **Success**: `green-900/20` tło, `green-800` ramka, `green-400` tekst

## Przykładowy kompletny komponent

```html
<div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800 space-y-4">
  <div class="flex items-center justify-between">
    <h2 class="text-lg font-semibold text-white">Tytuł sekcji</h2>
    <div class="flex gap-2">
      <button class="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors">
        Anuluj
      </button>
      <button class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors">
        Zapisz
      </button>
    </div>
  </div>

  <div>
    <span class="block text-sm font-medium text-gray-300 mb-2">Etykieta</span>
    <input
      type="text"
      class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
      placeholder="Wprowadź wartość..."
    />
  </div>

  <div class="bg-blue-900/20 rounded-xl p-4 border border-blue-800/50">
    <p class="text-blue-400 text-sm">Informacja dodatkowa</p>
  </div>
</div>
```
