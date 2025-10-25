//function for generate phone number
// @ts-ignore
Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}

class User {

    constructor(private _id:number, private _name:string, private _surname:string, private _email:string, private _phone:string) {
        this._id = _id;
        this._name = _name;
        this._surname = _surname;
        this._email = _email;
        this._phone = _phone;
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
}

let generNumber = function getNewNum():string {
    // @ts-ignore
    let kod = ['(099)', '(055)', '(096)', '(097)'].random();
    // @ts-ignore
    let num = Math.round(Math.random(1, 9) * 10000000).toString();
    return `${kod} ${num.slice(0, 3)}-${num.slice(3, 5)}-${num.slice(5, 7)}`
};

//function for generate new Arr with users
function makeUsersObj(users:User[]) {
    for (let i = 1; i <= 10; i++) {
        users.push(new User(i, `Vasya_${i}`, `Lom_${i}`, `${i}_ddd_${i}@gmail.com`, generNumber()));
    }
    return users;
}

let users:User[] = [];
console.log(makeUsersObj(users));