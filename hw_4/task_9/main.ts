/*
- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
*/
type User = { id: number, name: string, age: number }
function doNewBlockFromObj(arr:User[] = [{id: 1, name: 'Kolya', age: 22}, {id: 2, name: 'Alyosha', age: 33}]) {
    let res:string = '';
    for (const obj of arr) {
        res += `<div>
                <div>${obj['id']}</div>
                <div>${obj['name']}</div>
                <div>${obj['age']}</div>
              </div>
              `;
    }
    return res;
}

console.log(doNewBlockFromObj());