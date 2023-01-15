//-------------------ЗАДАЧА 1--------------------


// ==================Вариант 1===================

// function calcSum(a,b) {
//     return (alert (`Result: ${(a+b)}`));
// }
// let num1 = +prompt("Введите первое число")
// let num2 = +prompt("Введите второе число")

// calcSum(num1, num2)

// =================Вариант 3=====================

// function calcSum(a,b) {
//     return a+b;
// }

// let num1 = +prompt("Введите первое число")
// let num2 = +prompt("Введите второе число")


// alert (calcSum(num1,num2))



//------------------ЗАДАЧА 2-----------------------

function checkPalindrom(a) {
    for (i=0; i<a.length/2; i++) {
        return (a[i] == a[a.length-1-i]) ? true : false
    }

}

let b = prompt("Введите слово для проверки").toLowerCase()
if(checkPalindrom(b)) {
    alert(`Введенное вами: "${b}" - является палиндромом.`)
}
else {
    alert (`Введенное вами: "${b}" - не является палиндромом.`)
}

//=================вариант покороче=====================

// function checkPalindrom(a) {
//     for (i=0; i<a.length/2; i++) {
//         return (a[i] == a[a.length-1-i]) ? alert(`${a} - это палиндром`) : alert(`${a} - это не палиндром`)
//     }
// }
    
// let b = prompt("Введите текст").toLowerCase()
// checkPalindrom(b)