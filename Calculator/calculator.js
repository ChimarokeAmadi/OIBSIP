var currentOutput = [];
var typedOutput = [];

var currentOutputDiv = document.querySelector('.currentOutput');
var typedOutputDiv = document.querySelector('.typedOutput');

var number = document.querySelectorAll('.number');
number.forEach(number => {
    number.addEventListener('click', function(number) {
        var numberPressed = number.target.textContent;
        DisplayInCurrentOutput(numberPressed);
    });
}) ;

var symbol = document.querySelectorAll('.symbol');

function symbolclick(event) {
    var symbolclicked = event.target.textContent;
    DisplayInTypedOutput(symbolclicked)
}

function addListener() {
    symbol.forEach(symbol => {
        symbol.addEventListener('click', symbolclick)
    })
}

function removeListener() {
    symbol.forEach(symbol => {
        symbol.removeEventListener('click', symbolclick)
    })
}


function DisplayInCurrentOutput(numberPressed) {
    currentOutput.push(numberPressed);
    console.log(currentOutput)
    currentOutputDiv.textContent = currentOutput.join('');
    addListener();
}

function DisplayInTypedOutput(symbol) {
    console.log(typedOutput);
    typedOutput.push(currentOutput.join(''), ' ', symbol, ' ')
    typedOutputDiv.textContent = typedOutput.join('');
    currentOutput = [];
    removeListener();
}

function compute() {

}

function del() {

}

function allClear() {

}


