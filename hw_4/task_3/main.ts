/*
- створити функцію яка обчислює та повертає площу циліндру висотою h, та радісом r
*/
function countCylinder(r:number, h:number):number {
    return 2 * 3.14 * r * (r + h); //S = 2 π R (R + h)
}