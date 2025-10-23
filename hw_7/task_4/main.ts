/*
- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
*/
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

const users:User[] = [
    new User(1, 'Kolya1', 'Vilochnik1', 'kol1@gmail.com', '+380992221111'),
    new User(2, 'Kolya2', 'Vilochnik3', 'kol3@gmail.com', '+380992222222'),
    new User(3, 'Kolya3', 'Vilochnik3', 'kol3@gmail.com', '+380992222223'),
    new User(4, 'Kolya4', 'Vilochnik4', 'kol4@gmail.com', '+380992222224'),
    new User(5, 'Kolya5', 'Vilochnik5', 'kol5@gmail.com', '+380992222225'),
    new User(6, 'Kolya6', 'Vilochnik6', 'kol6@gmail.com', '+380992222226'),
    new User(7, 'Kolya7', 'Vilochnik7', 'kol7@gmail.com', '+380992222227'),
    new User(8, 'Kolya8', 'Vilochnik8', 'kol8@gmail.com', '+380992222228'),
    new User(9, 'Kolya9', 'Vilochnik9', 'kol9@gmail.com', '+380992222229'),
    new User(10, 'Kolya10', 'Vilochnik10', 'kol10@gmail.com', '+3809922222210'),

]

console.log(users.filter(elem => elem.id % 2 == 0));