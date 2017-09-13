'use strict';
//treść zadania
/* Stwórz przycisk “Pobierz dane”. Za pomocą jQuery, gdy strona już się
całkowicie załaduje, podepnij własną funkcję pod zdarzenie click tego
przycisku.
W tej funkcji pobierz z serwera objekt JSON ( URL =
http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/
akademia108.pl ). Dane zawarte w pobranym obiekcie wyświetl w
konsoli.
Napisz kod za pomocą jQuery i użyj do tego funkcji getJSON()  */


$(document).ready(function(){
    $("#click").click(function(){
        $.getJSON("http://echo.jsontest.com/imie/Piotr/nazwisko/Lewinski/zawod/Programista/firma/Akademia108", function(result){
            $.each(result, function(i, field){
                $("div").append(field + " ");
            });
        });
    });
});
// pobieramy??
/*var xml = new XMLHttpRequest();
xml.open("GET", "http://echo.jsontest.com/imie/Piotr/nazwisko/Lewinski/zawod/Programista/firma/Akademia108"
, true);
xml.onreadystatechange = function() {
 if ( xml.readyState == 4 && (r.status >= 200 && xml.status < 300 ||
xml.status == 304 || navigator.userAgent.indexOf("Safari") >= 0 && typeof
r.status == "undefined")) {
 if (xml.responseText=="ok") {
 var ok = document.createTextNode('***OK***');
 document.getElementsById('#pobierz-dane')[0].appendChild(ok);
 }
 xml = null;
 }
};
xml.send(); */