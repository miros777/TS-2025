/*
 - всі трефи від 9 та більше
*/
let allClubs:string[] = [];
// @ts-ignore
for (const oneCard of cardsAll) {
    if((oneCard.cardSuit === 'clubs' && oneCard.value > 9) || !Number(oneCard.value)){
        allClubs.push(oneCard);
    }
}
console.log(allClubs);