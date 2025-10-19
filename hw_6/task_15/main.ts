/*
 - всі буби
 */
let allDiamond:string[] = [];
// @ts-ignore
for (const oneCard of cardsAll) {
    if(oneCard.cardSuit === 'diamond'){
        allDiamond.push(oneCard);
    }
}
console.log(allDiamond);