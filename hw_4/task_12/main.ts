/*
- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
* */
type Value = {
    currency:string,
    value:number
}
function exchange(sumUAH:number = 900,currencyValues:Value[]=[{currency:'USD',value:30},{currency:'EUR',value:55}],exchangeCurrency:string='EUR'):number{
    let res:number = 0;
    for (const curObj of currencyValues) {
        if(curObj.currency === exchangeCurrency){
            res = sumUAH* curObj.value;
        }
    }
    return res;
}
console.log(exchange());