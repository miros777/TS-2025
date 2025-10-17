/*
- створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
*/
function swap(arr:number[] = [11,22,33,44],index1:number=0,index2:number=1):Array<number>{
    let resArr:any[] = [];
    for (let i = 0; i < arr.length; i++) {
        if(index1 === i){
            resArr[index1+1] = arr[i];
        }else if(index2 === i){
            resArr[index2-1] = arr[i];
        }else {
            resArr[i] = arr[i];
        }
    }
    return resArr;
}
console.log(swap());