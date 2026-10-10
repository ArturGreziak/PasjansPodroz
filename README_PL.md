# Pasjans skojarzeń — Podróż | Web

Oddzielna wersja przeglądarkowa w HTML, CSS i JavaScript. Nie wymaga kompilacji, Node.js, konta ani płatnych usług do grania. Zawiera polski interfejs, 24 etapy w sześciu krainach, 96 słów w 24 kategoriach, tryby Relaks i Wyzwanie, trzy podpowiedzi na etap, punkty, gwiazdki, rekord i zapis.

## 1. Uruchomienie na komputerze

1. Rozpakuj ZIP.
2. Otwórz folder `PasjansPodroz_WEB`.
3. Kliknij dwa razy `index.html` — gra otworzy się w domyślnej przeglądarce.
4. Nie przenoś samego `index.html` bez folderu `assets`.

Alternatywnie otwórz dołączony osobno `PasjansPodroz_GRA.html`. Ten pojedynczy plik zawiera cały kod i grafikę; nie potrzebuje folderu `assets` ani połączenia z internetem.

Przeglądarki mogą ograniczać zapis dla lokalnych plików, szczególnie w trybie prywatnym. Gra pokaże ostrzeżenie, gdy zapis nie jest dostępny. Najpewniejszy zapis uzyskasz pod stałym adresem HTTPS, np. GitHub Pages. Przeniesienie pliku lub zmiana adresu nie przenosi automatycznie postępu.

## 2. GitHub Pages — krok po kroku

1. Zaloguj się do GitHub.
2. Wybierz **New repository**, wpisz np. `pasjans-podroz`, ustaw **Public**, następnie **Create repository**.
3. Wybierz **Add file > Upload files** (w pustym repozytorium może być link **uploading an existing file**).
4. Wgraj zawartość folderu `PasjansPodroz_WEB`: `index.html`, folder `assets` i pozostałe pliki. Nie wgrywaj archiwum ZIP zamiast jego zawartości. `index.html` ma być w głównym katalogu repozytorium.
5. Zatwierdź przez **Commit changes**.
6. Otwórz **Settings > Pages**.
7. W **Build and deployment > Source** wybierz **Deploy from a branch**.
8. Wybierz **Branch: main**, folder **/(root)**, kliknij **Save**.
9. Po zakończeniu publikacji użyj adresu pokazanego w **Settings > Pages**. Adres ma zwykle postać `https://TWOJ_LOGIN.github.io/pasjans-podroz/`.

Ścieżki zasobów są względne, więc działają w podkatalogu repozytorium. Możesz także opublikować sam `PasjansPodroz_GRA.html`, zmieniając jego nazwę na `index.html`.

Dokumentacja: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

Gra nie została automatycznie opublikowana na Twoim GitHubie. Ta paczka jest gotowa do samodzielnego wgrania.

## 3. Telefon

Najwygodniej otworzyć adres GitHub Pages w przeglądarce telefonu. Dotknij karty, a potem kategorii. Na małych ekranach stół i kategorie są ustawione jeden pod drugim; stronę można przewijać.

Lokalny HTML na telefonie może być otwierany przez podgląd plików, który blokuje JavaScript. W takim przypadku korzystaj z adresu strony w przeglądarce.

## 4. Zasady i sterowanie

- Kliknij lub dotknij słowa, potem kategorii. Trafienie odsłania kolejną kartę na stosie.
- Talia jest przewijana przyciskiem **Następna karta** — bez kosztu i bez limitu.
- Na komputerze można też przeciągać słowa na kategorie.
- Klawiatura: **Tab**, **Enter** i **Spacja**. Skróty **1–5** wybierają stos/talię, **A–D** wskazują kategorie, **Esc** otwiera pauzę.
- Trafienie: +100 pkt. Pomyłka: −25 pkt. Podpowiedź: −15 pkt. Wynik nie spada poniżej zera.
- **Relaks**: dowolna liczba ruchów; brak odliczania czasu.
- **Wyzwanie**: trafienie i pomyłka zużywają po jednym ruchu. Dostępny limit widzisz nad kartami.
- Każdy etap zaczynasz z 3 podpowiedziami. Podpowiedź zaznacza kartę i jej kategorię, ale nie wykonuje ruchu.
- 3 gwiazdki: bez pomyłek i podpowiedzi. 2: najwyżej 2 pomyłki. 1: ukończenie.
- Cztery etapy w krainie stopniowo rozszerzają zestaw słów. Ostatni ma głębsze stosy. Tasowanie jest losowe; **Rozdaj ponownie** przywraca ten sam układ.

## 5. Zapis i prywatność

Postęp jest przechowywany przez `localStorage` pod kluczem `pasjans-podroz-web-v1`. Zapis nie jest wysyłany do serwera. Nie ma synchronizacji między telefonami, przeglądarkami ani aplikacją Android.

**Ustawienia > Usuń cały postęp** wymaga potwierdzenia. Wyczyszczenie danych witryny, tryb prywatny lub zmiana adresu strony mogą spowodować utratę/dostępność innego zapisu.

Gra nie korzysta z reklam, zewnętrznych fontów, CDN ani analityki. Nie zawiera AdMob, który z projektu Android nie został przeniesiony do wersji przeglądarkowej. Hosting (np. GitHub) może osobno przetwarzać standardowe dane techniczne połączenia.

Pobrane pliki działają offline. Wersja na hostingu musi najpierw zostać załadowana; nie zawiera service workera i nie gwarantuje ponownego uruchomienia adresu strony bez internetu.

## 6. Gdzie zmieniać grę

- `assets/content.js`: krainy, kategorie i słowa.
- `assets/engine.js`: zasady, liczba kart, limit ruchów, punkty, tasowanie, walidacja zapisu.
- `assets/store.js`: zapis postępu.
- `assets/app.js`: ekrany, sterowanie, dźwięki.
- `assets/style.css`: kolory, wielkości kart, układ telefonu i komputera, animacje.
- `assets/icon.svg`: autorska ikona wektorowa.

Po zmianie kodu źródłowego pojedynczy plik `PasjansPodroz_GRA.html` trzeba wygenerować ponownie. Zmiana ZIP nie aktualizuje wcześniej opublikowanej witryny — wgraj zmienione pliki do repozytorium.

## 7. Testy

Testy silnika działają bez instalowania dodatkowych pakietów (potrzebny Node.js):

```sh
node tests/engine.test.cjs
```

Dokładny zakres wykonanych kontroli opisano w `TESTY_PL.md`. Podczas gry sprawdź na swoim urządzeniu czytelność, dźwięk i wygodę sterowania.

## Punkt powrotu

Ukończona osobna wersja Web. Gotowe pliki do lokalnego uruchomienia i GitHub Pages. Projekt Android pozostaje oddzielnym produktem i używa własnego zapisu.
