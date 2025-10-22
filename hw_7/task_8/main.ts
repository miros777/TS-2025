/*
- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
*/
console.log(clients.sort((a, b) => a.order.length - b.order.length));