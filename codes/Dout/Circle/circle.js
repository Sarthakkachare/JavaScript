function areaOfCircle(){
let number = parseInt(document.getElementById('number1').value);

let areaOfCircle = 3.14 * number * number ;

document.getElementById('answer1').value = areaOfCircle;
return areaOfCircle;
}
function temperture(){
    let celsius = parseInt(document.getElementById('number2').value);
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('answer2').value = fahrenheit;
}