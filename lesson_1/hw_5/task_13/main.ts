/*
- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
*/
type Data = {currency:string,value:number}
const exchange = (sumUAH:number,currencyValues:Data[],exchangeCurrency:string):number => {
    for (const obj of currencyValues) {
        if(obj.currency === exchangeCurrency){
            return sumUAH/obj.value;
        }
    }
    return -1
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))