/*
- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
*/

class Client {
    constructor(private _id:number, private _name:string, private _surname:string, private _email:string, private _phone:string, private _order:{id: number, name: string, price: number}[]) {
        this._id = _id;
        this._name = _name;
        this._surname = _surname;
        this._email = _email;
        this._phone = _phone;
        this._order = _order;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get surname(): string {
        return this._surname;
    }

    set surname(value: string) {
        this._surname = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get phone(): string {
        return this._phone;
    }

    set phone(value: string) {
        this._phone = value;
    }

    get order(): { id: number; name: string; price: number }[] {
        return this._order;
    }

    set order(value: { id: number; name: string; price: number }[]) {
        this._order = value;
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

console.log(clients.sort((a, b) => a.order.length - b.order.length));