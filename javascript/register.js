$(document).ready(function(){
    $("#ciudadNombre").oninput = autoCompletar();
});


function autoCompletar() {
    var options = {
                      types: ['(cities)'],
                      componentRestrictions: {country: "mx"}
                      };
    var input = document.getElementById('ciudadNombre');
    var autocomplete = new google.maps.places.Autocomplete(input, options);
}