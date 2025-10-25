/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
*/
const makeTagList = (text:string, count:number=5):string => {
    if (count === 0) {
        throw new Error('count tag <li> is 0');
    }
    let li = `<li>${text}</li>`;
    let allLi = '';
    for (let i = 0; i < count; i++) {
        allLi += li;
    }
    return `<ul>${allLi}</ul>`;
}
console.log(makeTagList('Okten', 7));