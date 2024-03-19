let currentOutput = [];
let typedOutput = []; 
// let calcNumber = [];
var equalsButton = document.querySelector('#equals');
var allClearButton = document.querySelector('.allClear');

var currentOutputDiv = document.querySelector('.currentOutput');
var typedOutputDiv = document.querySelector('.typedOutput');

var number = document.querySelectorAll('.number');
number.forEach(number => {
    number.addEventListener('click', function(number) {
        var numberPressed = number.target.textContent;
        // console.log(calcNumber)
        DisplayInCurrentOutput(numberPressed);
    });
}) ;

var symbol = document.querySelectorAll('.symbol');


function symbolClick(event) {
    symbol.forEach(function(button) {
        button.classList.remove('pressed')
    })
    event.target.classList.add('pressed');
    var symbolText = event.target.textContent;
    console.log(symbolText);
    DisplayInTypedOutput();
    if (typedOutputDiv.textContent !== '' || currentOutputDiv.textContent !== '') {
        compute(symbolText);
    }
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
    if (numberPressed === '.' && currentOutput.includes('.')) return
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
    currentOutput =[];
    currentOutputDiv.textContent = '0';  
}

equalsButton.addEventListener('click', function() {
    compute();
})

allClearButton.addEventListener('click', allClear)

function compute(symbolText) {
    let computation
    const prev = parseFloat(this.typedOutputDiv.textContent)
    const current = parseFloat(this.currentOutputDiv.textContent)
    if (isNaN(prev) || isNaN(current)) return;
    switch (symbolText) {
        case '+':
            console.log('plus');
            break;
        case '-':
            console.log('minus');
            break;
        case '*':
            console.log('times');
            break;
        case '/' :
            console.log('divide');
            break;
    }
    console.log(prev)
    console.log(current)
    currentOutputDiv.textContent = computation;
}

function del() { 

}

function allClear() {
    typedOutputDiv.textContent = '';
    currentOutputDiv.textContent = '';
    typedOutput = [];
    currentOutput = [];
    symbol.forEach(function(button) {
        button.classList.remove('pressed')
    })
}


