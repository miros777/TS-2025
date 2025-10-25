/*
- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
*/
let arr = [999,333,'fiat', true];
const buildListFromArr = (arr:any[]):string => {
    let allLi = '';
    for (const arrElement of arr) {
        allLi += `<li>${arrElement}</li>`;
    }
    return `<ul>${allLi}</ul>`;
}
console.log(buildListFromArr(arr));