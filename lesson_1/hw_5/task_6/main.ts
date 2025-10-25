/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
*/
const makeTagUlLi = (text:string):string => {
    return `<ul>
                <li>${text}</li>
                <li>${text}</li>
                <li>${text}</li>
            </ul>`
}
console.log(makeTagUlLi('Okten'));