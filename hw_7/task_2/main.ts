//add new метод random for array
// @ts-ignore
Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}