/*
- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
*/
function doNewList(arr:Array<string|number|boolean> = [11, 'do', false]):string {
    let li = '';

    for (const arrElement of arr) {
        li += `<li>${arrElement}</li>`;
    }

    return `<ul>${li}</ul>`
}

console.log(doNewList());