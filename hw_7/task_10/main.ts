/*
- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
*/
console.log('================================');

class CarNew {
    constructor(id, model, producer, year, speed, volume) {
        this.id = id;
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.speed = speed;
        this.volume = volume;
    }

    drive() {
        return `їдемо зі швидкістю ${this.speed} на годину`;
    }

    info() {
        let res = '';
        for (const argumentsKey in this) {
            if (typeof this[argumentsKey] === 'object' && this[argumentsKey] !== null) {
                res += `${argumentsKey}: ${JSON.stringify(this[argumentsKey])}
                `;
            } else {
                res += `${argumentsKey}: ${this[argumentsKey]}
                `;
            }
        }
        return res;
    }

    increaseMaxSpeed(newSpeed) {
        return this.speed += newSpeed;
    }

    changeYear(newValue) {
        return this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }

}

let carNew = new CarNew(1, '500-C', 'MB', 1599, 300, '2.0');
console.log(carNew.drive());
console.log(carNew.info());
console.log(carNew.increaseMaxSpeed(500));
console.log(carNew.changeYear(2020));
carNew.addDriver({id: 5, name: 'Vlad'});
console.log("===INFO");
console.log(carNew.info());
console.log("===INFO");