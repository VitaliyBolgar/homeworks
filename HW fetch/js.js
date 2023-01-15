// ------ V A L U E S ------ //
const body = document.querySelector('body')
const inp1 = document.querySelector('.inp1');
const inp2 = document.querySelector('.inp2');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const img = document.querySelector('.img');
const picDiv1 = document.querySelector('.block1');
const statsDiv1 = document.querySelector('.stats1');
const picDiv2 = document.querySelector('.block2');
const statsDiv2 = document.querySelector('.stats2');




// Создаем таблицу для статов
let table = document.createElement('table');
let tHead = document.createElement('thead')
let tBody = document.createElement('tbody')

table.append(tHead)
table.append(tBody)
statsDiv1.append(table)
// row for pictures
let row = document.createElement('tr')
let a = document.createElement('td')
let x = document.createElement('td')
row.append(a,x)
picDiv1.append(row)
// atk row
let row1 = document.createElement('tr')
let b1 = document.createElement('td');
b1.innerHTML = 'ATK'
let b2 = document.createElement('td');
row1.append(b1, b2)
// special atk row
let row2 = document.createElement('tr')
let b3 = document.createElement('td');
b3.innerHTML = 'Special ATK'
let b4 = document.createElement('td');
row2.append(b3, b4)
// defence row
let row3 = document.createElement('tr')
let b5 = document.createElement('td');
b5.innerHTML = 'Defence'
let b6 = document.createElement('td');
row3.append(b5, b6)
// special defence row
let row4 = document.createElement('tr')
let b7 = document.createElement('td');
b7.innerHTML = 'special Defence'
let b8 = document.createElement('td');
row4.append(b7, b8)
// add all rows to tBody
tBody.append(row1, row2, row3, row4)

// Таблица для второй карточки
// Создаем таблицу для статов
let table1 = document.createElement('table');
let thead = document.createElement('thead')
let tbody = document.createElement('tbody')
table1.append(thead)
table1.append(tbody)
statsDiv2.append(table1)
// row for pictures
let row5 = document.createElement('tr')
let b = document.createElement('td')
let y = document.createElement('td')
row5.append(b,y)
picDiv2.append(row5)
// ATK row
let row6 = document.createElement('tr')
let b9 = document.createElement('td');
b9.innerHTML = 'ATK'
let b10 = document.createElement('td');
row6.append(b9, b10)
// spetial ATK row
let row7 = document.createElement('tr')
let b11 = document.createElement('td');
b11.innerHTML = 'Special ATK'
let b12 = document.createElement('td');
row7.append(b11, b12)
// defence row
let row8 = document.createElement('tr')
let b13 = document.createElement('td');
b13.innerHTML = 'Defence'
let b14 = document.createElement('td')
row8.append(b13, b14)
// special defence row
let row9 = document.createElement('tr')
let b15 = document.createElement('td');
b15.innerHTML = 'special Defence'
let b16 = document.createElement('td');
row9.append(b15, b16)
// add all rows to tbody
tbody.append(row6, row7, row8, row9)

// ------ S T Y L E S ------ //
statsDiv1.style = 'max-height: 210px'
picDiv1.style = 'min-height: 100px'
row.style = 'height: 100px; border: none'
table.style = 'height: 209px; font-size: 16px; border-collapse: collapse; padding: 0'
statsDiv2.style = 'max-height: 210px'
row5.style = 'height: 100px; border: none'
table1.style = 'height: 209px; font-size: 16px; border-collapse: collapse; padding: 0'
// styles for td
let arrStats = [b1, b3, b5, b7]
arrStats.forEach(td => {
    td.style = 'text-align: left'
})
let arrStatsNum = [b2, b4, b6, b8]
arrStatsNum.forEach(td => {
    td.style = 'text-align: right; min-width: 40px; font-size: 16px; '
})
let arrStats1 = [b9, b11, b13, b15]
arrStats1.forEach(td => {
    td.style = 'text-align: left'
})
let arrStatsNum1 = [b10, b12, b14, b16]
arrStatsNum1.forEach(td => {
    td.style = 'text-align: right; min-width: 40px; font-size: 16px; '
})


// ------ F E T C H ------ //

const getPokemon1 = function(name1) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name1}`) // вызываем переменную, которую обязательно прописать в параметре функции большой
    .then((data1) => data1.json()) // лучше использовать стрелочную функцию
    .then(data1 => { 
        // аватар персонажа
        const frontImg = document.createElement('img');
        frontImg.style = 'width: 100px; height:100px';
        frontImg.src = data1.sprites.front_default;
        a.append(frontImg);
        const backImg = document.createElement('img');
        backImg.style = 'width: 100px; height: 100px';
        backImg.src = data1.sprites.back_default;
        x.append(backImg);
        // статы персонажа ATK
        const pokATK = document.createElement('p')
        pokATK.innerHTML = `${Object.values(data1.stats[1]).slice(0,1)}`
        b2.append(pokATK)
        // stats spATK
        const pokSpATK = document.createElement('p')
        pokSpATK.innerHTML = `${Object.values(data1.stats[3]).slice(0,1)}`
        b4.append(pokSpATK)
        // stats Defence
        const pokDef = document.createElement('p')
        pokDef.innerHTML = `${Object.values(data1.stats[2]).slice(0,1)}`
        b6.append(pokDef)
        // stats spDefence
        const pokSpDef = document.createElement('p')
        pokSpDef.innerHTML = `${Object.values(data1.stats[4]).slice(0,1)}`
        b8.append(pokSpDef)
        })
    .catch(() => {
        console.log('error -_-')  
    })
};
const getPokemon2 = function(name2) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name2}`) // вызываем переменную, которую обязательно прописать в параметре функции большой
    .then((data2) => data2.json()) // лучше использовать стрелочную функцию
    .then(data2 => { 
        // аватар персонажа
        const frontImg1 = document.createElement('img');
        frontImg1.style = 'width: 100px; height:100px';
        frontImg1.src = data2.sprites.front_default;
        b.append(frontImg1);
        const backImg1 = document.createElement('img');
        backImg1.style = 'width: 100px; height: 100px';
        backImg1.src = data2.sprites.back_default;
        y.append(backImg1);
        // статы персонажа ATK
        const pokATK1 = document.createElement('p')
        pokATK1.innerHTML = `${Object.values(data2.stats[1]).slice(0,1)}`
        b10.append(pokATK1)
        // stats spATK
        const pokSpATK1 = document.createElement('p')
        pokSpATK1.innerHTML = `${Object.values(data2.stats[3]).slice(0,1)}`
        b12.append(pokSpATK1)
        // stats Defence
        const pokDef1 = document.createElement('p')
        pokDef1.innerHTML = `${Object.values(data2.stats[2]).slice(0,1)}`
        b14.append(pokDef1)
        // stats spDefence
        const pokSpDef1 = document.createElement('p')
        pokSpDef1.innerHTML = `${Object.values(data2.stats[4]).slice(0,1)}`
        b16.append(pokSpDef1)
        })
    .catch(() => {
        console.log('error -_-')  
    })
};

// ------ E V E N T S ------ //


btn1.addEventListener('click', () => {
    const name1 = inp1.value.toLowerCase()
    getPokemon1(name1);
})
btn2.addEventListener('click', () => {
    const name2 = inp2.value.toLowerCase()
    getPokemon2(name2);
})

