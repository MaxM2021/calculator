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
    return result;
};

function clearExpression() {
    expression.length = 0;
};

const expression = [];

const button1 = document.querySelector("#one");
button1.addEventListener('click', () => {
    expression.push(1);
});
const button2 = document.querySelector("#two");
button2.addEventListener('click', () => {
    expression.push(2);
});
const button3 = document.querySelector("#three");
button3.addEventListener('click', () => {
    expression.push(3);
});
const button4 = document.querySelector("#four");
button4.addEventListener('click', () => {
    expression.push(4);
});
const button5 = document.querySelector("#five");
button5.addEventListener('click', () => {
    expression.push(5);
});
const button6 = document.querySelector("#six");
button6.addEventListener('click', () => {
    expression.push(6);
});
const button7 = document.querySelector("#seven");
button7.addEventListener('click', () => {
    expression.push(7);
});
const button8 = document.querySelector("#eight");
button8.addEventListener('click', () => {
    expression.push(8);
});
const button9 = document.querySelector("#nine");
button9.addEventListener('click', () => {
    expression.push(9);
});
const button0 = document.querySelector("#zero");
button0.addEventListener('click', () => {
    expression.push(0);
});
const buttonPlus = document.querySelector("#plus");
buttonPlus.addEventListener('click', () => {
    expression.push('+');
});
const buttonMinus = document.querySelector("#minus");
buttonMinus.addEventListener('click', () => {
    expression.push('-');
});
const buttonMultiply = document.querySelector("#multiply");
buttonMultiply.addEventListener('click', () => {
    expression.push('x');
});
const buttonDivide = document.querySelector("#divide");
buttonDivide.addEventListener('click', () => {
    expression.push('/');
});
const buttonClear = document.querySelector("#clear");
buttonClear.addEventListener('click', () => {
    clearExpression();
});
const buttonEquals = document.querySelector("#equals");
buttonEquals.addEventListener('click', () => {
    console.log(makeExpression(expression));
});
