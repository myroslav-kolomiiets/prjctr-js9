import {
    ADDITION,
    CLEAR,
    DIVISION,
    DIVISION_SIGN,
    EQUAL,
    MULTIPLICATION,
    MULTIPLICATION_SIGN,
    SUBTRACTION,
} from './contants.js';

export class Calculator {
    #calculator;
    #calculatorResult;

    constructor() {
        this.#calculator = document.querySelector('.calculator');
        this.#calculatorResult = this.#calculator.querySelector('.calculator__result');

        this.#calculator.addEventListener('click', this.#onCalculatorButtonClick);
    }

    #onCalculatorButtonClick = (event) => {
        const value = event.target.innerText;

        if (event.target.nodeName !== 'BUTTON') {
            return;
        }

        if (value === EQUAL) {
            const inputString = this.#calculatorResult.innerText
                .replace(MULTIPLICATION_SIGN, MULTIPLICATION)
                .replace(DIVISION_SIGN, DIVISION);

            const lastChar = inputString[inputString.length - 1];

            if (this.#isMathOperator(lastChar)) {
                return;
            }

            const convertStringToFunctionObject = new Function(`return ${inputString}`);

            this.#calculatorResult.innerText = convertStringToFunctionObject();

            return;
        }

        if (value === CLEAR) {
            this.#clearResultField();

            return;
        }

        this.#calculatorResult.innerText += value;
    }

    #isMathOperator = (char) => {
        return char === ADDITION || char === SUBTRACTION || char === MULTIPLICATION || char === DIVISION_SIGN;
    };

    #clearResultField = () => {
        this.#calculatorResult.innerText = '';
    }
}
