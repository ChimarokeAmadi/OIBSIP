var currentOutput = [];
var typedOutput = [];

// var currentNumberPosition = currentOutput.length - 1;
// var numberToDisplay = currentOutput[currentNumberPosition];

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

symbol.forEach(symbol => {
    symbol.addEventListener('click', function() {
        console.log(this.textContent)
        var symbolpressed = this.textContent;
        DisplayInTypedOutput(symbolpressed);
    });
});




function DisplayInCurrentOutput(numberPressed) {
    currentOutput.push(numberPressed);
    console.log(currentOutput)
    currentOutputDiv.textContent = currentOutput.join('');
}

function DisplayInTypedOutput(symbol) {
    typedOutput.push(symbol);
    console.log(typedOutput);
    typedOutputDiv.textContent = currentOutput.join('') + ' ' + typedOutput[typedOutput.length - 1];
    currentOutput = [];
    DisplayInCurrentOutput();
}

function compute() {

}

function del() {

}

function allClear() {

}


