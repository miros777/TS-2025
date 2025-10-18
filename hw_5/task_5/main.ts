/*
- створити функцію яка створює параграф з текстом. Текст задати через аргумент
*/
const makeTagP = (text:string):string => `<p>${text}</p>`;
console.log(makeTagP('Okten'));