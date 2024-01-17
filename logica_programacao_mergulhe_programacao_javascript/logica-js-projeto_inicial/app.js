alert('Welcome to the Secret Number Guessing Game');
let numberSecret = 5;
let numberTyped = prompt('Choose a number from 1 to 30');

if (numberSecret == numberTyped) {
    alert('Congratulations');
} else {
    alert("I'm sorry, but you messed up");
}