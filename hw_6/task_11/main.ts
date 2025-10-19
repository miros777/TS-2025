/*
 описати колоду карт (від 6 до туза без джокерів)
{
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
    value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    color:'', // 'red','black'
}
*/
let cardsSuit:string[] = ['spade', 'diamond', 'heart', 'clubs'];
let cardsValue:string[] = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];

let cardsAll = cardsValue.reduce((acc:[], oneCard:string) => {
    let color = '';

    for (const suit of cardsSuit) {
        if (suit === 'diamond' || suit === 'heart') {
            color = 'red';
        } else if(suit === 'spade' || suit === 'clubs'){
            color = 'black';
        }

        // @ts-ignore
        acc.push({
            cardSuit: suit,
            value: oneCard,
            color: color
        });
    }

    return acc;

}, []);

console.log(cardsAll);