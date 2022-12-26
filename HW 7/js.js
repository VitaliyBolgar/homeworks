//  Объект
const company = {
    head: 'Ivanov',
    manager: 'Petrov',
    cars: [
      { mark: 'Audi', price: 1500000, color: 'white' },
      { mark: 'BMW', price: 1800000, color: 'white' },
      { mark: 'Mercedes', price: 2500000, color: 'black' },
    
    ],
    staff: {
      role: 'cleaner', age: 45, name: 'Ivan'
    },
    adress: "Spb, Leninskiy avenue",
    
}

// Задача 1:
// Напишите функцию для удаления переданного в параметры ключа из переданного объекта.

delete company.manager;
console.log(company);

// Задача 2
// Напишите функцию, которая принимает объект и возвращает его длину

//-------------метод Object.keys
console.log(Object.keys(company).length); // - object.keys возвращает массив ключей. В скобках указываем имя массива, далее через точку length выводим длину


//-------------перебор
let a = 0;
for (let key in company) {
    a++;
} 
console.log(a);


// Задача 3
// Напишите функцию которая принимает url а возвращает данные с сервера / Вытащите покемона

const myPokemon = async() => { 
  let pokemons = await fetch('https://pokeapi.co/api/v2/pokemon/charmander') 
  pokemons = await pokemons.json()
  console.log(pokemons);
  console.log(pokemons.name); // - просто имя покемона
}

myPokemon();

