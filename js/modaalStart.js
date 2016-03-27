$(document).ready( function() {
    var bendleTekst = $('#bendle').detach();
    var sleepTekst = $('#sleep').detach();
    var pathéTekst = $('#pathé').detach();
    var passwordTekst = $('#password').detach();
    
    
    
    // evemts 
    $('bendleThumb').on('click', function() {
        modaalObj.openen({inhoud: bendleTekst, breedte: 700});
    });
    
    $('#sleepThumb').on('click', function() {
        modaalObj.openen({inhoud: sleepTekst, breedte: 700});
    });
    
     $('#patheThumb').on('click', function() {
        modaalObj.openen({inhoud: patheTekst, breedte: 400});
    });
    
     $('#passwordThumb').on('click', function() {
        modaalObj.openen({inhoud: passwordTekst, breedte: 400});
    });
    
});