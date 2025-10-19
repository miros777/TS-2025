/*
 - всі червоні карти
 */
let allRed:string[] = [];
// @ts-ignore
for (const oneCard of cardsAll) {
    if(oneCard.color === 'red'){
        allRed.push(oneCard);
    }
}
console.log(allRed);