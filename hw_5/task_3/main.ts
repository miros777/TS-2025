/*
- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
*/
const countCylinder = (r:number, h:number):number => 2 * 3.14 * r * (r + h); //S = 2 π R (R + h)
console.log(countCylinder(5,11));