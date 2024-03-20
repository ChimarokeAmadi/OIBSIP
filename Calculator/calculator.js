let currentOutput = [];
let typedOutput = []; 

var equalsButton = document.querySelector('#equals');
var allClearButton = document.querySelector('.allClear');

var currentOutputDiv = document.querySelector('.currentOutput');
var typedOutputDiv = document.querySelector('.typedOutput');

var number = document.querySelectorAll('.number');
number.forEach(number => {
    number.addEventListener('click', function(number) {
        var numberPressed = number.target.textContent;
        // symbol.forEach(function(button) {
        //     button.classList.remove('pressed')
        // })
        DisplayInCurrentOutput(numberPressed);
    });
}) ;

var symbol = document.querySelectorAll('.symbol');


function symbolClick(event) {
    typedOutput = []
    symbol.forEach(function(button) {
        button.classList.remove('pressed')
    })
    event.target.classList.add('pressed');
    var symbolText = event.target.textContent;
    console.log(symbolText);
    DisplayInTypedOutput();
    compute(symbolText)
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
    currentOutputDiv.textContent = ''
    currentOutput = []
    typedOutputDiv.textContent = typedOutput.join('');
    console.log(typedOutput);
}

equalsButton.addEventListener('click', function() {
    const pressedSymbol = document.querySelector('.symbol.pressed');
    if (pressedSymbol) {
        const symbolText = pressedSymbol.textContent;
        compute(symbolText);
    }
    typedOutputDiv.textContent = ''
})

allClearButton.addEventListener('click', allClear)

function compute(symbolText) {
    if (currentOutputDiv.textContent === '') return
    console.log('called')
    const prev = parseFloat(typedOutputDiv.textContent)
    const current = parseFloat(currentOutputDiv.textContent)
    if (isNaN(prev) || isNaN(current)) return;
    switch (symbolText) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/' :
            computation = prev / current;
            break;
        default:
            return
    }
    console.log(prev)
    console.log(current)
    // DisplayInCurrentOutput(computation)
    currentOutputDiv.textContent = computation;
    currentOutput = [computation]
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


