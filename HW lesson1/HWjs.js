// Сложение 

let num1 = Number(prompt("введите первое число"))
let num2 = Number(prompt("введите второе число"))
let result = num1+num2

alert(`result: ${result}`)

// Остаток
// Вариант 1
let numeral = Number(prompt("Введите трёхзначное число"))
let units = numeral%10
let tens = ((numeral-units)%100)/10
let hundreds = (numeral-tens*10-units)/100

alert(`${hundreds}, ${tens}, ${units}`)

//Вариант 2
let chislo = (prompt("Введите трёхзначное число")) 
let edinitsa = chislo%10
let desyatki = ((chislo/10)-(edinitsa*0.1))%10
let sotni = (chislo/100)-(desyatki*0.1+edinitsa*0.01)

alert(`${sotni}, ${desyatki}, ${edinitsa}`)