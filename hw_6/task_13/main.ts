/*
 - всі шістки
 */
let allSix:string[] = [];
// @ts-ignore
for (const oneCard of cardsAll) {
    if(oneCard.value === '6'){
        allSix.push(oneCard);
    }
}
console.log(allSix);