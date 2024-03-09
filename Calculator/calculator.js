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
    event.target.classList.add('pressed');
    var symbolText = this.textContent;
    console.log(symbolText);
    DisplayInTypedOutput();

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
    currentOutputDiv.textContent = currentOutput.join('');
    addListener();
}

function DisplayInTypedOutput() {
    typedOutput.push(currentOutput.join(''))
    currentOutputDiv.textContent = '0'
    typedOutputDiv.textContent = typedOutput.join('');
    console.log(typedOutput);
    removeListener();
    currentOutput =[];
    currentOutputDiv.textContent = '0';  
}



function compute() {

}

function del() {

}

function allClear() {

}


