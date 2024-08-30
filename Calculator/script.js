// script.js
document.addEventListener('DOMContentLoaded', function () {
    let display = document.getElementById('display');
    let buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            let value = this.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                operator = '';
                previousInput = '';
                display.textContent = '0';
            } else if (value === '=') {
                if (previousInput && operator && currentInput) {
                    currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                    display.textContent = currentInput;
                    previousInput = '';
                    operator = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput) {
                    operator = value;
                    previousInput = currentInput;
                    currentInput = '';
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });
});