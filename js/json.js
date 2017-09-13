'use strict';
// funkcja jQuery GETJSON - zwraca nam dane w formacie json
//$.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', function(data) {
//wyswietl w konsoli
//    console.log(data);
//    console.log(data.userId);
//});

//za pomoca funkcji jQuery ajax (wynik ten sam)
$.ajax({
    url: "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
    dataType: 'json',
    success: function (resultJSON) {
        console.log(resultJSON);
    },
    onerror: function (msg) {
        console.log(msg);
    }
});
