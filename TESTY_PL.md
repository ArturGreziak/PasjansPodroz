# Weryfikacja wersji Web — 10.10.2026

## Wykonane

1. Sprawdzenie składni JavaScript przez `node --check`.
2. Testy 4800 rozdań: 24 etapy × 100 ziaren tasowania × 2 tryby. W każdym rozdaniu po każdym ruchu zapisano i odtworzono stan, a następnie ukończono grę.
3. Przegrana po wyczerpaniu ruchów na wszystkich 24 etapach oraz brak takiej przegranej w Relaksie.
4. Deterministyczny restart, przewijanie talii, limit podpowiedzi, punktacja i gwiazdki.
5. Odrzucanie uszkodzonych zapisów, obcych/zdublowanych kart i niespójnych liczników; działanie przy zablokowanym zapisie.
6. Postęp, odblokowywanie kolejnego etapu, reset oraz zachowanie rekordu.
7. Test zdarzeń interfejsu w środowisku DOM (jsdom): menu, mapa, wybór trybu, karta, dopasowanie, podpowiedź, wygrana, następny etap, przegrana, ponowienie, pauza, klawiatura, odtworzenie po ponownym otwarciu, anulowanie i potwierdzenie resetu. Nie wystąpiły błędy wykonania JavaScript w tych scenariuszach.
8. Kontrola istnienia lokalnych zasobów i względnych adresów zachowujących podkatalog `/my-game/`, jak w GitHub Pages.
9. Osobne uruchomienie skryptów z pojedynczego pliku HTML w środowisku DOM.

## Granice weryfikacji

Test DOM nie jest testem wizualnym przeglądarki: nie mierzy realnego układu pikseli, gestów dotykowych, fizycznego przeciągania kart ani odtwarzania audio. W tej sesji nie był dostępny obsługiwany mechanizm kontroli przeglądarki, dlatego nie wykonano kontroli wizualnej ani testów na fizycznym telefonie. Układ responsywny i ograniczenie animacji przy `prefers-reduced-motion` są zaimplementowane w CSS; wymagają obejrzenia na docelowym urządzeniu.

Gra nie została opublikowana na GitHub Pages. Zweryfikowano przygotowanie plików i ścieżek, a nie działanie pod adresem Twojego konta.
