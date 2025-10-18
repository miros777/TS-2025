/*
- створити функцію яка повертає найменьше число з масиву
*/
let array: number[] = [10, 21, 2, 0, 44, 300, 11];

const getMinNumberFromArr = (arr: number[]): number => {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }

    let minNum: number = 0;

    for (let i = 1; i < arr.length; i++) {
        // @ts-ignore
        if (arr[i] < minNum) {
            // @ts-ignore
            minNum = arr[i];
        }
    }

    return minNum;
};

console.log(getMinNumberFromArr(array));