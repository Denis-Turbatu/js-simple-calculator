
function gestioneOperazioneNum1(num1){
    if (signOperation == true){
        num1 = parseInt(display.innerHTML);
        display.innerHTML = "";
    }
    return num1;
}

function gestioneOperazioneNum2(num2){
    if (signOperation == true){
        num2 = parseInt(display.innerHTML);
    }
    return num2;
}



function stampaRisultato(num1, num2) {
    if (signOperation == true && displaySign.innerHTML == "+") {
        console.log(num1 + num2);
        display.innerHTML = num1 + num2;
        displaySign.innerHTML = "";
    } else if (signOperation == true && displaySign.innerHTML == "-") {
        console.log(num1 - num2);
        display.innerHTML = num1 - num2;
        displaySign.innerHTML = "";
    } else if (signOperation == true && displaySign.innerHTML == "x") {
        console.log(num1 * num2);
        display.innerHTML = num1 * num2;
        displaySign.innerHTML = "";
    } else if (signOperation == true && displaySign.innerHTML == "/") {
        console.log(num1 / num2);  
        display.innerHTML = num1 / num2;
        displaySign.innerHTML = "";  
    }else{
        console.log("Non va!");
    }
}