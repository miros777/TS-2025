/*
- Користувач вводить або має два числа.
Потрібно знайти та вивести максимальне число з тих двох .
Також потрібно врахувати коли введені рівні числа.
*/
let number1:number = 500;
let number2:number = 100;

if ((typeof number1 && typeof number2) === 'number') {
    if (number1 > number2) {
        console.log('Max number:', number1);
    } else if (number1 === number2) {
        console.log('Числа рівні, MAX:', number1);
    } else {
        console.log('Max number:', number2);
    }
}