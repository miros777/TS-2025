/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
*/
function newTagUl(text:string = 'Hello!', countLi:number = 5):string {
    let res:string = '';
    for (let i = 0; i < countLi; i++) {
        res += `<li>${text}</li>`;
    }
    return `<ul>${res}</ul>`;
}

console.log(newTagUl());