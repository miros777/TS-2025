/*
- створити функцію яка створює параграф з текстом. Текст задати через аргумент
*/
function newTagP(text:string = 'Hello'):string {
    return `<p>${text}</p>`;
}

console.log(newTagP());
