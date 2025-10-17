/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
*/
function newTagUlLi(text:string = 'Hello!'):string {
    let res = '';
    for (let i = 0; i < 3; i++) {
        res += `<li>${text}</li>`;
    }
    return `<ul>${res}</ul>`;
}

console.log(newTagUlLi());