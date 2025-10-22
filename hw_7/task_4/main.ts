//fuction for generate new Arr with users
function makeUsersObj(users) {
    for (let i = 1; i <= 10; i++) {
        users.push(new User(i, `Vasya_${i}`, `Lom_${i}`, `${i}_ddd_${i}@gmail.com`, generNumber()));
    }
    return users;
}

let users = [];
console.log(makeUsersObj(users));