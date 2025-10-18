/*
- створити функцію яка приймає масив та виводить кожен його елемент
*/
type Primitive = boolean | string | number
const getItemFromArr = (arr:Primitive[]):void => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
getItemFromArr([1,22,false,'ggg']);