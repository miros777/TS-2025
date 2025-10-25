/*
 -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
 */

type Course = {title: string, monthDuration: number}

let coursesAndDurationArray:Course[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.filter((elem) => elem.monthDuration === 5));