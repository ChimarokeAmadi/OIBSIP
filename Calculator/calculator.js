var currentOutput = [];
var typedOutput = [];

var currentNumberPosition = currentOutput.length - 1;
var numberToDisplay = currentOutput[currentNumberPosition];

var currentOutputDiv = document.querySelector('.currentOutput');

var number = document.querySelectorAll('.number');
number.forEach(number => {
    number.addEventListener('click', function(number) {
        var numberPressed = number.target.textContent;
        displayInCurrentOutput(numberPressed);
    });
}) ;

function displayInCurrentOutput(number) {
    currentOutput.push(number);
    console.log(currentOutput)
}

function displayInTypedOutput() {

}

function compute() {

}

function del() {

}


