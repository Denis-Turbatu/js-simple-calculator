const btnNumber = document.querySelectorAll(".btn-num");
console.log(btnNumber);
const btnSign = document.querySelectorAll(".btn-sign");
const display = document.querySelector(".number-text");
const displaySign = document.querySelector(".sign-text");
const btnEqual = document.querySelector(".btn-equal");
const btnClear = document.querySelector(".btn-clear");

let numberOne = 0;
let numberTwo = 0;
let signOperation = false;

btnNumber.forEach(function (button, index) {
    button.addEventListener("click", function () {
        display.innerHTML += button.innerHTML;
    });
});

btnSign.forEach(function (button, index) {
    button.addEventListener("click", function () {
        signOperation = true;
        numberOne = gestioneOperazioneNum1(numberOne);
        console.log(numberOne, "numero 1");
        displaySign.innerHTML = `${button.innerHTML}`;
    });
});

btnEqual.addEventListener("click", function(){
    numberTwo = gestioneOperazioneNum2(numberTwo);
    console.log(numberTwo, "numero 2");
    console.log("risultato: ");
    stampaRisultato(numberOne, numberTwo);
});

btnClear.addEventListener("click", function(){
    display.innerHTML = "";
    displaySign.innerHTML = "";
});