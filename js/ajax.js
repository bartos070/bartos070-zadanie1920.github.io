'use strict';
/* funkcja którą możemy używać w swoich projekrach (zapisana przez czysty javaScript) */
/* definicja funkcji */
function ajax( ajaxOptions ) {
    
    //parametry połączenia i typu
    var options = {
        type: ajaxOptions.type || 'POST',
        url: ajaxOptions.url || '',
        onError: ajaxOptions.onError || function () {},
        onSuccess: ajaxOptions.onSuccess || function () {},
        dataType: ajaxOptions.dataType || 'text'
    };
    
/* funkcja sprawdzająca status połączenia - czy połączenie się udało, funkcja na parametr przyjmuje obiekt */
    /*nie chcemy zeby program w razie niepowodzenia sie zatrzymal*/
    function httpSuccess( httpRequest ) {
        try {
            return (httpRequest.status >= 200 && httpRequest.status < 300 || httpRequest.status == 304 || navigator.userAgent.indexOf('safari') >= 0 && typeof httpRequest.status == 'undefined');
        } catch (e) {
            return false;
        }
    } 
    // 1. utworzenie obiektu XMLHttpRequest
    var httpReq = new XMLHttpRequest();
    
    // 2. otwarcie polaczenia na obiekcie
    httpReq.open(options.type, options.url, true);
    
    // 3. sprawdz stan dokumentu - onreadystatechange
    httpReq.onreadystatechange = function() {
        // sprawdzamy czy dane są zwrócone i gotowe do użycia
        if(httpReq.readyState == 4) {
            // sprawdzamy statyus polaczenia
            if( httpSuccess(httpReq) ) {
                var returnData = (options.dataType == 'XML')? httpReq.responseXML : httpReq.responseText;
                //jeśli wszystko ok, to funkcja onSucces
                options.onSuccess( returnData );
                
                //zeruj obiekt, żeby nie wysyłać żądań do serwera i nie utrzymywać połączenia
                
                httpReq = null;
                //else jeżeli błąd, wykonaj funkcję onError
            } else {
                options.onError( httpReq.statusText );
            }
        }
    }
    //wysyłamy obrobione żądanie do serwera
    httpReq.send();
}
/*wywołanie funkcji*/

ajax( {
    typ: 'GET',
    url: 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl',
    //jeżeli połącznie zwraca błąd
    onError: function (msg) {
        console.log(msg);
    },
    //jeżeli połączenie nawiązane i dane gotowe do użycia
    onSuccess: function (response) {
        console.log('połączenie zostało nawiązane');
        
        var jsonObj = JSON.parse(response);
        console.log(jsonObj);
        console.log(jsonObj.userId);
        console.log(jsonObj.userName);
        console.log(jsonObj.userURL);
        
        
    }
    
})






