// ================== МАССИВЫ
const arr = ['a', 'b', 'c', ];
const arr1 = [1, 2, 3,];
const arr2 = ['js', 'css', 'jq'];
const arr3 = [1, 2, 3, 4, 5];

// ------ Задача 1 ------
// Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
let all = [].concat(arr, arr1);
console.log(all);

// ------ Задача 2 ------
//Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
        // PUSH
arr.push(1, 2, 3);
console.log(arr);
        // SPLICE
arr.splice(3, 0, 1, 2, 3);
console.log(arr);

// ------ Задача 3 ------
// Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
        // REVERSE
const reversed = arr1.reverse();
console.log(reversed);

        // FUNCTION + FOR
function reverseMass (a)  {
    let b = [];
    for (let i = a.length-1; i>=0; i--){
        b.push(a[i]);
    }
    return b;
}
console.log(reverseMass(arr1));


// ------ Задача 4 ------
//Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
        //PUSH
arr1.push(4, 5, 6);
console.log(arr1);
        // SPLICE 
arr1.splice(3, 0, 4, 5, 6);
console.log(arr1);


// ------ Задача 5 ------
//Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
        // PUSH
arr1.unshift(4,5,6);
console.log(arr1);

        // SPLICE 
arr1.splice(-3, 0, 4, 5, 6);
console.log(arr1);

/////////////////////S H I F T  &  P O P/////////////////////////

// ------ Задача 6 ------
// Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
let deletedFirst = arr2.shift();
console.log(deletedFirst);


// ------ Задача 7 ------
//Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
let deletedLast = arr2.pop();
console.log(deletedLast);

////////////////////S L I C E///////////////////

// ------ Задача 8 ------
//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
let slicedArr3 = arr3.slice(0, 3);
console.log(slicedArr3);


// ------ Задача 9 ------ 
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
let slicedArr3 = arr3.slice(3, 5);
console.log(slicedArr3);

///////////////////S P L I C E/////////////////

// ------ Задача 10 ------
//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
let splicedArr3 = arr3.splice(1, 2);
console.log(arr3);


// ------ Задача 11 ------ 
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
        // вар1 - переписать полностью ыыыы
let splicedArr3 = arr3.splice(0, 5, 2,3,4);
console.log(arr3);
        // вар2
let del = arr3.splice(1,3);
console.log(del);


// ------ Задача 12 ------ 
//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
let arrNew = arr3.splice(3, 0, 'a', 'b', 'c');
console.log(arr3);



// ------ Задача 13 ------
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

let x = arr3.splice(1, 0, 'a', 'b'); // [1, 'a', 'b', 2, 3, 4, 5]
let y = arr3.splice(6, 0, 'c'); // [1, 'a', 'b', 2, 3, 4, 'c', 5]
let z = arr3.splice(8, 0, 'e'); // [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
console.log(arr3);