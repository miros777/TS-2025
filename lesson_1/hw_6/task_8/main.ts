/*
==========================
- є масив
 -- відсортувати його за спаданням за monthDuration
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

console.log(coursesAndDurationArray.sort((cours1, cours2) => cours2.monthDuration - cours1.monthDuration));