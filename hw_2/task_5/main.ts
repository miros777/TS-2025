/*
- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
*/
type DayTemp = [number, number, number];

let arr3:DayTemp[] = [
    [22, 33, 15],
    [12, 23, 25],
    [11, 24, 22],
    [16, 44, 20],
    [7, 30, 17],
    [33, 22, 20],
    [5, 17, 15]
];
// або
type Day = {
    morning: number,
    day: number,
    night: number
}
let week:Day[] = [
    {
        morning: 22,
        day: 33,
        night: 22
    },
    {
        morning: 43,
        day: 17,
        night: 33
    },
    {
        morning: 65,
        day: 41,
        night: 44
    },
    {
        morning: 55,
        day: 4,
        night: 55
    },
    {
        morning: 44,
        day: 56,
        night: 54
    },
    {
        morning: 22,
        day: 12,
        night: 32
    },
    {
        morning: 11,
        day: 43,
        night: 22
    },
];