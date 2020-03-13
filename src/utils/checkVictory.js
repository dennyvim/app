export default (deck) => {
    if(deck.filter((card) => !card.guessed).length === 0)
    {
        return true;
    }
}
