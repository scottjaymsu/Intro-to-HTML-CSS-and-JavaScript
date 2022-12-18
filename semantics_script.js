function temperature_convert () {
    //convert celsius to fahrenheit using field inputs 
    var celsius = document.getElementById('c').value;
    var fahrenheit = ((celsius*(9/5)) + 32);
    document.getElementById('f').value = fahrenheit;
}

function weight_convert () {
    //convert kilograms to pounds using field inputs 
    var kilograms = document.getElementById('kg').value;
    var pounds = kilograms * 2.2;
    document.getElementById('lb').value = pounds;
}

function distance_convert() {
    //convert kilometers to miles using field inputs
    var kilos = document.getElementById('km').value;
    var miles = (kilos * 0.62137); 
    document.getElementById('mi').value = miles;
}