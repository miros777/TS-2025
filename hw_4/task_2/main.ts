/*
- створити функцію яка обчислює та повертає площу кола з радіусом r
*/
function countCircle(r: number): string {
    let res:number = 3.14 * r;
    return (Math.pow(res, 2)).toFixed(2);
}