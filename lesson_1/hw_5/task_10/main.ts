/*
- створити функцію яка повертає найменьше число з масиву
*/
let array: number[] = [10, 21, 2, 0, 44, 300, 11];

const getMinNumberFromArr = (arr: number[]): number => {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }

    let minNum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let number  = arr[i];
        // @ts-ignore
        if (number < minNum) {
            minNum = number;
        }
    }

    // @ts-ignore
    return minNum;
};

console.log(getMinNumberFromArr(array));