import React from 'react';
import Footer from '../../../../components/footer/footer.js';
import Board from '../../../../components/board/board';
import buildDeckCards from '../../../../utils/buildDeckCards.js'
import checkVictory from '../../../../utils/checkVictory.js'
import './assets/levels.css'
const getInitialState = () => {
        const deck = buildDeckCards(8);
        return{
            deck,
            selectedCouple: [],
            isCompared: false
        };
    }

class LevelThree extends React.Component{
    constructor(props){
        super(props)
        this.state = getInitialState();
    }
    render(){
        return(
            <div className="bodylevels">
                <Board 
                deck={this.state.deck} 
                selectedCouple={this.state.selectedCouple}
                selectCard={(card) => this.selectCard(card)}
                />
                <Footer/>
            </div>
        );
    }

    selectCard(card){
        if(
            this.state.isCompared || 
            this.state.selectedCouple.indexOf(card) > -1 ||
            card.guessed
        ){
            return;
        }

        const selectedCouple = [...this.state.selectedCouple, card];
        this.setState({
            selectedCouple
        });

        if(selectedCouple.length === 2){
            this.compareCouple(selectedCouple);
        }

    }

    compareCouple(selectedCouple){
        this.setState({
            isCompared:true

        });

        setTimeout(() => {
            const [firstCard, secondCard] = selectedCouple;
            let deck = this.state.deck;

            if(firstCard.icon === secondCard.icon){
                deck = deck.map((card) => {
                    if(card.icon !== firstCard.icon){
                        return card;
                    }
                    return {...card, guessed: true}                    
                })
            }
            if(checkVictory(deck)){
                return this.props.history.push('/Victory')
            };
            this.setState({
                selectedCouple: [],
                deck,
                isCompared: false

            })
        }, 1000)

    }

}
export default LevelThree;
