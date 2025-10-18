/*
- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
*/
const swap = (arr: number[], index1: number, index2: number): number[] => {
    let res: number[] = new Array(arr.length); // <--- створюємо масив потрібної довжини

    for (let i = 0; i < arr.length; i++) {
        if (index1 === i) {
            // @ts-ignore
            res[index2] = arr[i];
        } else if (index2 === i) {
            // @ts-ignore
            res[index1] = arr[i];
        } else {
            // @ts-ignore
            res[i] = arr[i];
        }
    }

    return res;
}

console.log(swap([11,22,33,44], 0, 1)); // [22, 11, 33, 44]