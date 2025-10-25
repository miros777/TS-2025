/*
- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
*/
let array: number[] = [10, 21, 2, 0, 44, 300, 11];
const sum = (array:number[]):number => {
    let res = 0;
    for (const arrayElement of array) {
        res += arrayElement;
    }
    return res;
}
console.log(sum(array));