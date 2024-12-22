// Write JavaScript code here


function appendToDisplay(value) {
    var display = document.getElementById('display')
    display.value += value

}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.substring(0, display.length -1)
}

function calculateResult() {
    document.getElementsByClassName('equal');

    let result = eval(document.getElementById('display').value);
    return document.getElementById('display').value = result;
}