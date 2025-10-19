/*
- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]
*/
let nums:number[] = [11, 21, 3];

function sortNums(nums:number[], direction:string):number[] {
    if (direction === 'ascending') {
        return nums.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return nums.sort((a, b) => b - a);
    }
    return nums
}

console.log(sortNums(nums, 'ascending'))  // [3,11,21]
console.log(sortNums(nums, 'descending'))  // [21,11,3]