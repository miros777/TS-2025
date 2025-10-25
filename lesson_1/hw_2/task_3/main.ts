/*
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
*/
type Author = {
    name: string,
    age: number
}
type Book = {
    title: string,
    pageCount: number,
    genre: string,
    authors: Author[]
}
let bookOne:Book = {
    title: 'Kobzar',
    pageCount: 300,
    genre: 'poeziya',
    authors: [{name: 'Shevchenko', age: 33}]
}
let bookTow:Book = {
    title: 'No name',
    pageCount: 500,
    genre: 'komedi',
    authors: [{name: 'Poroh', age: 53}]
}
let bookThree:Book = {
    title: 'Kolobok',
    pageCount: 100,
    genre: 'drama',
    authors: [{name: 'Taras', age: 55}]
}
