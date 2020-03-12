import shuffle from 'lodash.shuffle';
import CardClasses from './cardClasses.js'

export default (NUMBER_OF_CARDS) => {

    const cardClasses = CardClasses();
    let cards = [];

    while(cards.length < NUMBER_OF_CARDS){
        const index = Math.floor(Math.random() * cardClasses.length);
        const card = {
            icon: cardClasses.splice(index, 1)[0],
            guessed: false
        }
        cards.push(card);
        cards.push({...card})
    }
    return shuffle(cards);
};