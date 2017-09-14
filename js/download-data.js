'use strict';


$(document).ready(function(){
    $("#click").click(function(){
        $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function(result){
            $.each(result, function(i, field){
                $("div").append(field + " ");
            });
        });
    });
});
