const display = document.getElementById('display');
function appendValue(value){
    display.value = display.value + value;
}
function clearDisplay() {
    display.value = "";
}
function deleteLast(){
    display.value= display.value.slice(0, -1);
}
function calculate(){
    let expression = display.value;
    let result= eval(expression);
    display.value= result;
}
