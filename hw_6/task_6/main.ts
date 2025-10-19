/*
- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
*/
let newArr:number[] = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// @ts-ignore
let elemArrtoStr = newArr.map((elem:number[]):string[] => elem.toString());
console.log(elemArrtoStr);