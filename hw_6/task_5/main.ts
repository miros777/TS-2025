/*
- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
    let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
*/
let strLong:string = 'Ревуть воли як ясла повні';
let stringToarray = (strLong:string):string[] => strLong.split(' ');
console.log(stringToarray(strLong));