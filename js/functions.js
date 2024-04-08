
function gestioneOperazioneNum1(num1){
    if (signOperation == true){
        num1 = parseInt(display.innerHTML);
        console.log(num1, typeof num1);
        display.innerHTML = "";
    }
    return num1;
}

function gestioneOperazioneNum2(num2){
    if (signOperation == true){
        num2 = parseInt(display.innerHTML);
        console.log(num2, typeof num2);
    }
    return num2;
}



function stampaRisultato(num1, num2) {
    if (signOperation == true && displaySign.innerHTML == " +") {
        console.log(num1, num2);
        console.log(num1 + num2);
    }else {
        console.log("riprova");
    }
}