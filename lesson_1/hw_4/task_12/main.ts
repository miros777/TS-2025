/*
- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
* */
type Value = {
    currency:string,
    value:number
}
function exchange(sumUAH:number, currencyValues:Value[],exchangeCurrency:string):number{
    let res = 0;
    for (const curObj of currencyValues) {
        if(curObj.currency === exchangeCurrency){
            res = sumUAH* curObj.value;
        }
    }
    return res;
}
console.log(exchange(900, [{currency:'USD',value:30},{currency:'EUR',value:55}], 'EUR'));