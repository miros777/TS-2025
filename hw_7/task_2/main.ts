//add new метод random for array
Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}