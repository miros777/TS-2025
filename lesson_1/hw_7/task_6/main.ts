/*
- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client
*/
class Client {
    constructor(private id:number, private name:string, private surname:string, private email:string, private phone:string, private order:{id: number, name: string, price: number}[]) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients:Client[] = [
    new Client(1, 'Gogi1', 'Kant_1', 'www@gmail.com', '+34543545', [{id: 1, name: 'Cap1', price: 100}, {
        id: 2,
        name: 'Cap2',
        price: 200
    }]),
    new Client(2, 'Gogi2', 'Kant_2', 'fadgfdgwww@gmail.com', '+38022 333-44-54', [{
        id: 1,
        name: 'Cap1',
        price: 100
    }, {id: 2, name: 'Cap2', price: 200}, {id: 3, name: 'Cap3', price: 300}]),
    new Client(3, 'Gogi3', 'Kant_3', 'gffdgwww@gmail.com', '+234234234', [{id: 1, name: 'Cap1', price: 100}, {
        id: 2,
        name: 'Cap2',
        price: 200
    }, {id: 3, name: 'Cap3', price: 300}, {id: 4, name: 'Cap4', price: 300}]),
    new Client(4, 'Gogi4', 'Kant_4', 'dfgfdg@gmail.com', '+234324', [{id: 1, name: 'Cap1', price: 100}, {
        id: 2,
        name: 'Cap2',
        price: 200
    }, {id: 3, name: 'Cap3', price: 300}]),
    new Client(5, 'Gogi5', 'Kant_5', 'dfg5t34@gmail.com', '+38022 333-44-54', [{
        id: 1,
        name: 'Cap1',
        price: 100
    }, {id: 2, name: 'Cap2', price: 200}, {id: 3, name: 'Cap3', price: 300}]),
    new Client(6, 'Gogi6', 'Kant_6', 'erg34@gmail.com', '+123123', [{id: 1, name: 'Cap1', price: 100}, {
        id: 2,
        name: 'Cap2',
        price: 200
    }, {id: 3, name: 'Cap3', price: 300}, {id: 4, name: 'Cap4', price: 300}]),
    new Client(7, 'Gogi7', 'Kant_7', '3454@gmail.com', '+123213', [{id: 1, name: 'Cap1', price: 100}]),
    new Client(8, 'Gogi8', 'Kant_8', '34543546w@gmail.com', '+123213', [{id: 1, name: 'Cap1', price: 100}, {
        id: 2,
        name: 'Cap2',
        price: 200
    }, {id: 3, name: 'Cap3', price: 300}, {id: 4, name: 'Cap4', price: 300}]),
    new Client(9, 'Gogi9', 'Kant_9', '435435fgfdgwww@gmail.com', '+21312312323', [{
        id: 1,
        name: 'Cap1',
        price: 100
    }, {id: 2, name: 'Cap2', price: 200}, {id: 3, name: 'Cap3', price: 300}]),
    new Client(10, 'Gogi10', 'Kant_10', 'dfgwww@gmail.com', '+43435', [{id: 1, name: 'Cap1', price: 100}, {
        id: 2,
        name: 'Cap2',
        price: 200
    }, {id: 3, name: 'Cap3', price: 300}, {id: 4, name: 'Cap4', price: 300}]),
];
console.log(clients);