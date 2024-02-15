var inputTxt=document.getElementById('display');
function appendToDisplay(input){
    inputTxt.value += input;
}

function clearDisplay(){
    inputTxt.value='';
}

function calculate(){
    try{
        inputTxt.value = eval(inputTxt.value);
    }catch(err) {
        inputTxt.value='Error';
    }
}