                        // ВЫВОД ЭЛЕМЕНТОВ
//==================While=====================
let arr = [1,2,4,-1,-3,8,7,0,-5,18,12] 
let i=0

while (i<arr.length){
    if(arr[i]>0 && arr[i]<10){
        console.log(arr[i])
    }
    i++
}
//==================for======================
let arr1 = [1,2,4,-1,-3,8,7,0,-5,18,12] 
for(i=0; i<arr1.length; i++){
    if (arr1[i]>0 && arr1[i]<10){
        console.log(arr1[i])
    }
}



                    // ЗАПОЛНЕНИЕ МАССИВОВ Х
//=============for===================
let arr2 = []
for(i=0; i<10; i++){
    arr2[i]="x";
}
    console.log(arr2)

//=============while==================
let arr3 = []
let i=0
while(i<10){
    arr3[i]="x"
    i++
}
console.log(arr3)
