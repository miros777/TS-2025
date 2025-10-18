/*
- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
*/
type User = {id:number, name:string, age:number}
let buildBlockFromObj = (users:User[]):void => {
    for (let user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>>`)
    }
}
buildBlockFromObj([
    {id: 1, name: 'Kolya', age: 22},
    {id: 2, name: 'Alyosha', age: 33},
    {id: 3, name: 'Sasha', age: 53}
    ]
);