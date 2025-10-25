/*
- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
*/
type User = {
    name: string,
    username: string,
    password: string
}

let user_0:User = {
    name: 'Kolya10',
    username: 'Kolya10',
    password: '191e98ge1gf89ew1f83r3('
}
let user_1:User = {
    name: 'Kolya',
    username: 'Kolya',
    password: '123frtd('
}
let user_2:User = {
    name: 'Kolya2',
    username: 'Kolya2',
    password: '51441984('
}
let user_3:User = {
    name: 'Kolya3',
    username: 'Kolya3',
    password: '498498498('
}
let user_4:User = {
    name: 'Kolya4',
    username: 'Kolya4',
    password: '198198189('
}
let user_5:User = {
    name: 'Kolya5',
    username: 'Kolya5',
    password: '555589('
}
let user_6:User = {
    name: 'Kolya6',
    username: 'Kolya6',
    password: '18918918('
}
let user_7:User = {
    name: 'Kolya7',
    username: 'Kolya7',
    password: '9855511afwqf('
}
let user_8:User = {
    name: 'Kolya8',
    username: 'Kolya8',
    password: 'qwfw151189('
}
let user_9:User = {
    name: 'Kolya9',
    username: 'Kolya9',
    password: '191e98ge1gf89ew1f83r3('
}

let users:User[] = [
    user_0,
    user_1,
    user_2,
    user_3,
    user_4,
    user_5,
    user_6,
    user_7,
    user_8
    ,
    user_9
];

console.log('password:', users[0]!.password);
console.log('password:', users[1]!.password);
console.log('password:', users[2]!.password);
console.log('password:', users[3]!.password);
console.log('password:', users[4]!.password);
console.log('password:', users[5]!.password);
console.log('password:', users[6]!.password);
console.log('password:', users[7]!.password);
console.log('password:', users[8]!.password);
console.log('password:', users[9]!.password);

