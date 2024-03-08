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

function symbolClick(event) {
    symbol.forEach(function(button) {
        button.classList.remove('pressed')
    })
    this.classList.add('pressed');
    console.log(event.target.classList);
}

function addListener() {
    symbol.forEach(symbol => {
        symbol.addEventListener('click', symbolClick)
    })
}

function removeListener() {
    symbol.forEach(symbol => {
        symbol.removeEventListener('click', symbolClick)
    })
}


function DisplayInCurrentOutput(numberPressed) {
    currentOutput.push(numberPressed);
    console.log(currentOutput)
    currentOutputDiv.textContent = currentOutput.join(''), ' ', symbol;
    addListener();
}

// function DisplayInTypedOutput() {
//     console.log(typedOutput);
//     typedOutput.push(currentOutput.join(''))
//     typedOutputDiv.textContent = typedOutput.join('');
//     removeListener();
// }

function compute() {

}

function del() {

}

function allClear() {

}


