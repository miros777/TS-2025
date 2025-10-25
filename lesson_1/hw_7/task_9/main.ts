/*
-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
*/
class Cinderella {
    // @ts-ignore
    name:string;
    // @ts-ignore
    age:number;
    // @ts-ignore
    sizeFoot:number;

    // @ts-ignore
    constructor(private name:string, private age:number, private sizeFoot:number) {
        this.name = name;
        this.age = age;
        this.sizeFoot = sizeFoot;
    }
}

let cinderellas:Cinderella[] = [
    new Cinderella('Olya', 22, 35),
    new Cinderella('Olya1', 32, 34),
    new Cinderella('Olya2', 20, 35),
    new Cinderella('Olya3', 30, 41),
    new Cinderella('Olya4', 15, 36),
    new Cinderella('Olya5', 54, 38),
    new Cinderella('Olya6', 18, 40),
    new Cinderella('Olya7', 21, 35),
    new Cinderella('Olya8', 24, 40),
    new Cinderella('Olya9', 28, 36)
];
console.log(cinderellas);

/*
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
 */
class Prince extends Cinderella {

}

let prince:Prince = new Prince('Kolya', 44, 36);
console.log(prince);

/*
За допомоги циклу знайти яка попелюшка повинна бути з принцом.
*/
for (const cinderella of cinderellas) {
    if (cinderella.sizeFoot === prince.sizeFoot) {
        console.log(cinderella);
    }
}
/*
Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
 */
console.log(cinderellas.find(obj => obj.sizeFoot === prince.sizeFoot));
/*
Через Array.prototype. створити власний foreach, filter, map*/

Array.prototype.forEachCustom = function<T> (callback:(value:T) => void):void {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}
let arr:number[] = [1, 2, 33];
arr.forEachCustom(el => console.log(el));


Array.prototype.customFilter = function<T> (callback: (value:T) => boolean): T[] {
    const res: T[] = [];
    for (const elem of this) {
        if (callback(elem)) {
            res.push(elem);
        }
    }
    return res;
}
console.log(cinderellas.customFilter((elem) => elem.age > 38));

Array.prototype.mapCustom = function<T,U> (callback: (value:T) => U):U[] {
    let res = [];
    for (const el of this) {
        res.push(callback(el));
    }
    return res;
}
let newCinderellaArr:Cinderella[] = cinderellas.mapCustom((elem) => {
    return {
        ...elem, age: elem.age * 2
    };
});
console.log(newCinderellaArr);