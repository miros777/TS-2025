/*#dYQNrBV

Створити змінні. Присвоїти кожному з них значення: ‘hello’,’owu’,’com’, ‘ua’, 1, 10, -999, 123, 3.14, 2.7, 16, true, false.

    Вивести кожну змінну за допомогою: console.log
*/
let greeting:string = 'hello';
let own:string = 'own';
let domen_COM:string = 'com';
let domen_UA:string = 'ua';
let start:number = 1;
let point:number = 10;
let sum:number = -999;
let value:number = 123;
const PI:number = 3.14;
let price:number = 2.7;
let day:number = 16;
let yes:boolean = true;
let no:boolean = false;

console.log(greeting);
console.log(own);
console.log(domen_COM);
console.log(domen_UA);
console.log(start);
console.log(point);
console.log(sum);
console.log(value);
console.log(PI);
console.log(price);
console.log(day);
console.log(yes);
console.log(no);

/*
#6Qb97gsv

– Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З’єднати їх в одну змінну person
(Не об’єкт, просто за допомогою конкатенації)
*/
let firstName:string = 'Andrii';
let middleName:string = 'Olegovich';
let lastName:string = 'Syniavskyi';
let person:string = firstName + ' ' + middleName + ' ' + lastName;

/*
#4N0y5tufA

– За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

let a = 100; let b = ‘100’; let c = true;
*/
let a:number = 100;
let b:string = '100';
let c:boolean = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

/*


#ruUtWDUI

Додаткове для тих, хто цікавився prompt`oм

– За допомогою 3-х різних prompt() отримати 3 слова які являються вашими Імʼям, По-батькові та роками. Та вивести в консоль

 */
let namePrompt:string | null = prompt('Імя');
let midlNamePrompt:string | null = prompt('По-батькові');
let agePrompt:string | null = prompt('Скільки років');

console.log(namePrompt);
console.log(midlNamePrompt);
console.log(agePrompt);