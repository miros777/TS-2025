/*
- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
*/
type Driver = {id:number, name:string}
class Car {
    id:number;
    model:string;
    producer:string;
    year:number;
    speed:number;
    volume:string;
    driver?: Driver

    // @ts-ignore
    constructor(public id:number, public model:string, public producer:string, public year:number, public speed:number, public volume:string) {
        this.id = id;
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.speed = speed;
        this.volume = volume;
    }

    drive():string {
        return `їдемо зі швидкістю ${this.speed} на годину`;
    }

    info():string {
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

    increaseMaxSpeed(newSpeed:number):void {
        this.speed += newSpeed;
    }

    changeYear(newValue:number):void {
         this.year = newValue;
    }

    addDriver(driver:Driver):void {
        this.driver = driver;
    }

}

let car1:Car = new Car(1, 'Megane', 'Renault', 1999, 200, '2.0');
console.log(car1.drive());
car1.increaseMaxSpeed(50);
console.log(car1.speed);
car1.changeYear(2020)
console.log(car1.year);

car1.addDriver({id: 1, name: 'Gray'});

Car.prototype.info = function () {
    let res = '';
    function show(obj:Car) {

        for (const oneCar in obj) {
            // @ts-ignore
            let val = obj[oneCar];

            if (typeof val === 'function') continue;
            if (typeof val === 'object' && val !== null) {
                res += `${oneCar}: `;
                show(val);
            } else {
                res += `${oneCar}: ${val} `;
            }
        }
        return res;
    }

    return show(this);

}
console.log('========INFO Car');
console.log(car1.info());
console.log('========INFO Car');