/*
Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}
*/
console.log("====================================================");
type Card = { cardSuit: string, value: string, color: string };
// @ts-ignore
type Accomulator = {
    spades:Card[],
    diamonds:Card[],
    hearts:Card[],
    clubs:Card[]
}

// @ts-ignore
let newCardsSort = cardsAll.reduce(function (obj:Accomulator, elem){

    if(elem.cardSuit === 'spade'){
        obj.spades.push(elem);
    }
    if(elem.cardSuit === 'diamond'){
        obj.diamonds.push(elem);
    }
    if(elem.cardSuit === 'heart'){
        obj.hearts.push(elem);
    }
    if(elem.cardSuit === 'clubs'){
        obj.clubs.push(elem);
    }

    return obj;
},  {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
});
console.log(newCardsSort);