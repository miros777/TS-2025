/*
- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
*/
let dayWeek:number = 7;
let nameDay:string;
switch (dayWeek) {
    case 1:
        nameDay = 'Monday';
        break;
    case 2:
        nameDay = 'Tuesday';
        break;
    case 3:
        nameDay = 'Wednesday';
        break;
    case 4:
        nameDay = 'Thursday';
        break;
    case 5:
        nameDay = 'Friday';
        break;
    case 6:
        nameDay = 'Saturday';
        break;
    case 7:
        nameDay = 'Sunday';
        break;
    default:
        nameDay = 'No Day. Error!'
}
console.log(nameDay);