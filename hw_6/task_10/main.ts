/*
 -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
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

let map = coursesAndDurationArray.map((elem, index) => ({id: index + 1, ...elem}));
console.log(map);