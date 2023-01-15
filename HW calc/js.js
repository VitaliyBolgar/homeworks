
class Calculator {
    constructor(previousOperand, currentOperand) {
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand;
        this.clear()
    }

clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
}

// операции 
appendNum(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
}

chooseOperation (operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== ''){
        this.compute()
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
}

compute() {
    let result;
    const prev = parseFloat(this.previousOperand);
    const cur = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(cur)) return
    switch (this.operation) {
        case '+':
            result = prev + cur
            break
        case '-':
            result = prev - cur
            break
        case '*':
            result = prev * cur
            break
        case '/':
            result = prev / cur
            break
        default:
            return
    }
    this.currentOperand = result
    this.operation = undefined;
    this.previousOperand = ''
}


getDisplayNumber (number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay 
    if (isNaN(integerDigits)) {
        integerDisplay = ''
    } else {
        integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
    }
    if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
    } else {
        return integerDisplay
    }
}

updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
        this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
        this.previousOperandTextElement.innerText = ''
    }
}
}

const show = document.querySelector('.screen');
const btnNum = document.querySelectorAll('.btn');
const btnOper = document.querySelectorAll('.operation')
const btnEqual = document.querySelector('.equals')
// const btnDiv = document.querySelector('.div');
// const btnTimes = document.querySelector('.times');
// const btnMinus = document.querySelector('.minus');
// const btnPlus = document.querySelector('.plus');
// const btnEnter = document.querySelector('.btn.E.big');
const btnC = document.querySelector('.C');
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

// Вывод нажимаемых цифр на экран
btnNum.forEach(num => {
    num.addEventListener('click', () => {
        calculator.appendNum(num.innerText)
        calculator.updateDisplay()
    });
})

btnOper.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

btnEqual.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

btnC.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

document.addEventListener('click', function (event) {
    let patternForNumbers = /[0-9]/g;
    let patternForOperators = /[+\-*\/]/g;
    if (event.key.match(patternForNumbers)) {
        event.preventDefault();
        calculator.appendNum(event.key)
        calculator.updateDisplay()
    }
    if (event.key === '.') {
        event.preventDefault();
        calculator.appendNum(event.key)
        calculator.updateDisplay
    }
    if (event.key.match(patternForOperators)) {
        event.preventDefault();
        calculator.chooseOperation(event.key)
        calculator.updateDisplay()
    }
    if (event.key === 'Enter' || event.key === '=') {
        event.preventDefault();
        calculator.compute()
        calculator.updateDisplay()
    }
    if (event.key == 'Delete') {
        event.preventDefault()
        calculator.clear()
        calculator.updateDisplay()
    }
})



// // Нажатие С - удаление всего на экране
// btnC.addEventListener('click', () => {
//     show.innerHTML = "";
// } )

// Сложение 
