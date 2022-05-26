## Projekt do wypisywania / dodawania / edycji / usuwania postów

Część pierwsza - tabela z postami - na jednej stronie.
Wypisz wszystkie posty w tabeli
Endpoint do postów: https://jsonplaceholder.typicode.com/posts
Posty mają zostać raz pobrane i później operujemy na nich tylko na froncie.
Kolumny tabeli
Id, Tytuł (title), Treść (body), Akcje (kolumna dla przycisków „edytuj” i „usuń” które będą w kolejnej części, na razie pusta)
Zrób frontową paginację. Na dole lista stron, zaznaczona ta, na której się znajdujemy.
Lista wpisów na stronę jako parametr do zmiany u góry w selekcie (opcje: 10, 20, 50, domyślnie 10)
U góry pole type input text z wyszukiwarką, w momencie gdy jest włączone wyszukiwanie to paginacja nie działa (zawsze wyświetlane jest wszystko)
Wyszukiwarka po polach title oraz body, ignoruje wielkość liter. Gdy jest włączona wyszukiwarka to paginacja nie działa (zawsze wyświetla wszystko).
Podpowiedź: wyszukiwarka oraz paginacja może być zrobiona za pomocą computed.
W przypadku błędu pobrania danych z endpointa pokazać alert z informacją, że nie udało się pobrać danych.
Jak to podzielić na komponenty to już od Ciebie zależy, ale weź pod uwagę, że to pierwsza część zadania i dalej dojdzie edycja, dodawanie i usuwanie.

---

Część druga
Usuwanie posta - w ostatniej kolumnie tabeli dodać przycisk - „Usuń”
Po kliknięciu w niego pojawia się popup z potwierdzeniem „Czy na pewno chcesz usunąć” Tak/Nie.
Popup ma być osobnym, uniwersalnym komponentem do którego przekazujemy:
komunikat
dostępne przyciski
przycisk X w rogu
i po przyciśnięciu przycisku powinien emitować co zostało wybrane.
Popup powinien być htmlowym divem na środku ekranu i blokować inne przyciski (np. poprzez przezroczystego diva pod spodem)
Po naciśnięciu Nie - zamykamy popup
Po naciśnięciu Tak - robimy request DELETE do posta zgodnie z API https://jsonplaceholder.typicode.com/ oraz usuwamy go na froncie (oczywiście to API nie trzyma zmian więc po odświeżeniu strony ten post wróci :D).
