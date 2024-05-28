const counterElement = document.querySelector('.counter');
const incrementBtn = document.querySelector('#incrementBtn');
const decrementBtn = document.querySelector('#decrementBtn');
const resetBtn = document.querySelector('#resetBtn');


let counter = 0;

function updateCounter() {
    counterElement.textContent = counter;
}


function incrementCounter() {
    counter++;
    updateCounter();
}


function decrementCounter() {
    counter--;
    updateCounter();
}


function resetCounter() {
    counter = 0;
    updateCounter();
}


incrementBtn.addEventListener('click', incrementCounter);
decrementBtn.addEventListener('click', decrementCounter);
resetBtn.addEventListener('click', resetCounter);