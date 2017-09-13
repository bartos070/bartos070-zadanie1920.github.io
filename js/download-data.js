'use strict';


$(document).ready(function(){
    $("#click").click(function(){
        $.getJSON("http://echo.jsontest.com/imie/Piotr/nazwisko/Lewinski/zawod/Programista/firma/Akademia108", function(result){
            $.each(result, function(i, field){
                $("div").append(field + " ");
            });
        });
    });
});
