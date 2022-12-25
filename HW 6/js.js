////// З А Д А Ч А  1 //////
// Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.

//////////////// Полная функция через if ////////////
// - c указанием, что остаток равен 0
function check2nums(a, b) {
    if (a % 2 == 0 && b % 2 == 0) {
        return a*b;
    } else if (a % 2 == 0 || b % 2 == 0 ) {
        if (a % 2 == 0) {
            return b;
        } else {
            return a;
        }
    } else {
        return a+b;
    }
}
// - без указания, что остаток равен 0
function check2nums(a, b) {
    if (a % 2 && b % 2) {
        return a+b;
    } else if (a % 2 || b % 2) {
        if (a % 2) {
            return a;
        } else {
            return b;
        }
    } else {
        return a*b;
    }
}
//////////////// Условный оператор //////////////////
// - с указанием, что остаток равен 0
function check2nums(a, b) {
    return (a % 2 == 0 && b % 2 == 0) ? (a*b) :
     (a%2 == 0 || b%2 == 0)  ? ( (a%2==0) ? b : a ) : (a+b) 
}
// - без указания, что остаток равен 0
function check2nums(a, b) {
    return (a % 2 && b % 2) ? (a+b) :
     (a%2 || b%2)  ? ( (a%2) ? a : b ) : (a*b) 
}

//////////////// Строчная /////////////////
// - с указанием, что остаток равен 0
const check2nums = (a,b) => (a % 2 == 0 && b % 2 == 0) ? (a*b) : (a%2 == 0 || b%2 == 0)  ? ( (a%2==0) ? b : a ) : (a+b) 

// - без указания, что остаток равен 0
const check2nums = (a,b) => (a % 2 && b % 2) ? (a+b) : (a%2 || b%2)  ? ( (a%2) ? a : b ) : (a*b)


let num1 = +prompt("Enter num1");
let num2 = +prompt("Enter num2");

alert(check2nums(num1, num2));

////// З А Д А Ч А  2 //////
// Реализуйте функцию union(), которая объединит уникальные элементы всех массивов, переданных ей.  Пример: union([1, 2, 2, 3], [101, 2, 1, 10], [2, 1]) вернёт  [1, 2, 3, 101, 10].

const arr = [1, 2, 2, 3,];
const arr1 = [101, 2, 1, 10,];
const arr2 = [2, 1,];

function union(a) {
    let x = [];
    for (let str of a) {
        if (!x.includes(str)) {
            x.push(str);
        }
    }
    return x;
}

console.log(union([].concat(arr,arr1,arr2)));

// либо сделать переменную с объединенными массивами, далее через Set выбрать только уникальные значения, в логе вызвать функцию с переменной с уникальными значениями =_=
const newArr = [].concat(arr, arr1, arr2);
const uniqueArr = [...new Set(newArr)]
console.log(union(uniqueArr));

const myFunction = (...arrays) => Array.from(new Set(arrays.flat()))
console.log(myFunction(arr, arr1, arr2));
