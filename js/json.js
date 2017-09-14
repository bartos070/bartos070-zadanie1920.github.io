'use strict';

$.ajax({
    url: "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
    dataType: 'json',
    success: function (resultJSON) {
        console.log(resultJSON);
    },
    onerror: function (msg) {
        console.log(msg);
    }
});
