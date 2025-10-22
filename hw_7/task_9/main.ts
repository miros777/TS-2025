/*

- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
*/
function Car(id, model, producer, year, speed, volume) {
    this.id = id;
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.speed = speed;
    this.volume = volume;

    this.drive = function () {
        return `їдемо зі швидкістю ${this.speed} на годину`;
    }
    this.increaseMaxSpeed = function (newSpeed) {
        return this.speed += newSpeed;
    }
    this.changeYear = function (newValue) {
        return this.year = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let car1 = new Car(1, 'Megane', 'Renault', 1999, 200, '2.0');
console.log(car1.drive());
console.log(car1.increaseMaxSpeed(50));
console.log(car1.changeYear(2020));

car1.addDriver({id: 1, name: 'Grag'});

Car.prototype.info = function () {
    let res = '';
    function show(obj) {

        for (const oneCar in obj) {
            let val = obj[oneCar];

            if (typeof val === 'function') continue;
            if (typeof val === 'object' && val !== null) {
                res += `${oneCar}: `;
                show(val);
            } else if(typeof oneCar === 'string'){
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