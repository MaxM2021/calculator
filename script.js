function add(num1,num2) {
    return num1 + num2;
};
function subtract(num1,num2) {
    return num1 - num2;
};
function multiply(num1,num2) {
    return (num1 * num2);
};
function divide(num1,num2) {
    return num1 / num2;
};

function operate(operator, num1, num2) {
    if (operator == "+") {
        return add(num1,num2);
    } else if (operator == "-") {
        return subtract(num1,num2);
    } else if (operator == "x") {
        return multiply(num1,num2);
    } else if (operator == "/") {
        return divide(num1,num2);
    };
};

function makeExpression(array) {
    let operator = "";
    let operatorIndex = 0;
    let num1 = [];
    let num2 = [];
    if (array.indexOf('+') >= 0) {
        operator = array[array.indexOf('+')];
        operatorIndex = array.indexOf('+');
    } else if (array.indexOf('-') >= 0) {
        operator = array[array.indexOf('-')];
        operatorIndex = array.indexOf('-');
    } else if (array.indexOf('x') >= 0) {
        operator = array[array.indexOf('x')];
        operatorIndex = array.indexOf('x');
    } else if (array.indexOf('/') >= 0) {
        operator = array[array.indexOf('/')];
        operatorIndex = array.indexOf('/');
    };
    num1 = array.slice(0, operatorIndex);
    num1 = parseInt(num1.join(''));
    num2 = array.slice(operatorIndex + 1);
    num2 = parseInt(num2.join(''));
    let result = operate(operator, num1, num2);
    clearExpression();
    expression.push(result);
    display.textContent = result;
    return result;
};

function clearExpression() {
    expression.length = 0;
};

const expression = [];

const display = document.querySelector('#display');

const button1 = document.querySelector("#one");
button1.addEventListener('click', () => {
    expression.push(1);
    display.textContent = expression.join('');
});
const button2 = document.querySelector("#two");
button2.addEventListener('click', () => {
    expression.push(2);
    display.textContent = expression.join('');
});
const button3 = document.querySelector("#three");
button3.addEventListener('click', () => {
    expression.push(3);
    display.textContent = expression.join('');
});
const button4 = document.querySelector("#four");
button4.addEventListener('click', () => {
    expression.push(4);
    display.textContent = expression.join('');
});
const button5 = document.querySelector("#five");
button5.addEventListener('click', () => {
    expression.push(5);
    display.textContent = expression.join('');
});
const button6 = document.querySelector("#six");
button6.addEventListener('click', () => {
    expression.push(6);
    display.textContent = expression.join('');
});
const button7 = document.querySelector("#seven");
button7.addEventListener('click', () => {
    expression.push(7);
    display.textContent = expression.join('');
});
const button8 = document.querySelector("#eight");
button8.addEventListener('click', () => {
    expression.push(8);
    display.textContent = expression.join('');
});
const button9 = document.querySelector("#nine");
button9.addEventListener('click', () => {
    expression.push(9);
    display.textContent = expression.join('');
});
const button0 = document.querySelector("#zero");
button0.addEventListener('click', () => {
    expression.push(0);
    display.textContent = expression.join('');
});
const buttonPlus = document.querySelector("#plus");
buttonPlus.addEventListener('click', () => {
    expression.push('+');
    display.textContent = expression.join('');
});
const buttonMinus = document.querySelector("#minus");
buttonMinus.addEventListener('click', () => {
    expression.push('-');
    display.textContent = expression.join('');
});
const buttonMultiply = document.querySelector("#multiply");
buttonMultiply.addEventListener('click', () => {
    expression.push('x');
    display.textContent = expression.join('');
});
const buttonDivide = document.querySelector("#divide");
buttonDivide.addEventListener('click', () => {
    expression.push('/');
    display.textContent = expression.join('');
});
const buttonClear = document.querySelector("#clear");
buttonClear.addEventListener('click', () => {
    clearExpression();
    display.textContent = '';
});
const buttonEquals = document.querySelector("#equals");
buttonEquals.addEventListener('click', () => {
    console.log(makeExpression(expression));
});
