/*
-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
*/
class Popelushka {
    name;
    age;
    sizeFoot;

    constructor(name, age, sizeFoot) {
        this.name = name;
        this.age = age;
        this.sizeFoot = sizeFoot;
    }
}

let popelushechki = [
    new Popelushka('Olya', 22, 35),
    new Popelushka('Olya1', 32, 34),
    new Popelushka('Olya2', 20, 35),
    new Popelushka('Olya3', 30, 41),
    new Popelushka('Olya4', 15, 36),
    new Popelushka('Olya5', 54, 38),
    new Popelushka('Olya6', 18, 40),
    new Popelushka('Olya7', 21, 35),
    new Popelushka('Olya8', 24, 40),
    new Popelushka('Olya9', 28, 36)
];
console.log(popelushechki);

/*
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
 */
class Prince extends Popelushka {

}

let prince = new Prince('Kolya', 44, 36);
console.log(prince);

/*
За допомоги циклу знайти яка попелюшка повинна бути з принцом.
*/
for (const onePopelushka of popelushechki) {
    if (onePopelushka.sizeFoot === prince.sizeFoot) {
        console.log(onePopelushka);
    }
}
/*
Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
 */
console.log(popelushechki.find(obj => obj.sizeFoot === prince.sizeFoot));
/*
Через Array.prototype. створити власний foreach, filter, map*/
Array.prototype.foreachCustom = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}
let arr = [1, 2, 33];
arr.foreachCustom(el => console.log(el));

Array.prototype.filterCustom = function (callback) {
    let res = [];
    for (const elem of this) {
        if (callback(elem)) {
            res.push(elem);
        }
    }
    return res;
}
console.log(popelushechki.filterCustom((elem) => elem.age > 38));

Array.prototype.mapCustom = function (callback) {
    let res = [];
    for (const el of this) {
        res.push(callback(el));
    }
    return res;
}
let newPopelArr = popelushechki.mapCustom((elem) => {
    return {
        ...elem, age: elem.age * 2
    };
});
console.log(newPopelArr);