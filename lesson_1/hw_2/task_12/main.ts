/*
- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання.
У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
*/
type Course = {
    title: string,
    monthDuration: number,
}
let coursesAndDurationArray: Course[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let i:number = 0; i < coursesAndDurationArray.length; i++) {
    if (coursesAndDurationArray[i]?.monthDuration ?? 0 > 5) {
        console.log(coursesAndDurationArray[i]?.title ?? '' + ':', 'Супер');
    }
}
