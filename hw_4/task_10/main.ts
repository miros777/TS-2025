/*
- створити функцію яка повертає найменьше число з масиву
*/
function retMinNumberFromArr(arr:Array<number>=[1,2,33,-44,565,55]):number{
    return Math.min(...arr);
}
console.log(retMinNumberFromArr());
/*
- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
*/
function sum(arr:number[]=[1,3,43]):number{
    let sum:number = 0;
    for (const number of arr) {
        sum += number;
    }
    return sum;
}
console.log(sum());