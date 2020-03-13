import React from 'react';
import Card from '../card/card.js';
import './assets/board.css'


class Board extends React.Component{
    
    render(){
        return(
            <div className="board">
                {
                    this.props.deck
                    .map((card, index) =>{
                        const isBeingCompared = this.props.selectedCouple.indexOf(card) > -1;
                        return <Card 
                        key={index}
                        icon={card.icon} 
                        isBeingCompared={isBeingCompared}
                        selectCard ={() => this.props.selectCard(card)}
                        guessed={card.guessed}
                        />
                    } )
                }
            </div>
        );
    }
}

export default Board;