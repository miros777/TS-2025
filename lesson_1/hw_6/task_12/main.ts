/*
- знайти піковий туз
 */
let resCard = '';
// @ts-ignore
for (const oneCard of cardsAll) {
    if(oneCard.value === 'ace' && oneCard.cardSuit === 'spade'){
        resCard = oneCard;
    }
}
console.log(resCard);