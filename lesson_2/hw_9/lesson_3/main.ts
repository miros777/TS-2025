//jeBqHV525U5
// - Є масив
type Curs = {
    title: string,
    monthDuration: number
}
let coursesAndDurationArray:Curs[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const course of coursesAndDurationArray) {
    const div:HTMLElement = document.createElement('div');
    div.innerText = `${course.title} ${course.monthDuration}`
    document.body.appendChild(div);
}