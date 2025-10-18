/*
- створити функцію яка створює параграф з текстом. Текст задати через аргумент
*/
function newTagP(text:string = 'Hello'):void {
    console.log(`<p>${text}</p>`);
}

newTagP();
