//function for generate phone number
let generNumber = function getNewNum() {
    let kod = ['(099)', '(055)', '(096)', '(097)'].random();
    let num = Math.round(Math.random(1, 9) * 10000000).toString();
    return `${kod} ${num.slice(0, 3)}-${num.slice(3, 5)}-${num.slice(5, 7)}`
};