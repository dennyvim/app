import React from 'react';
import './assets/card.css';
import FlipCard from 'react-card-flip'
class Card extends React.Component{
render(){
        return(
            <div className="card" onClick={this.props.selectCard}>
                <FlipCard
               isFlipped={this.props.isBeingCompared || this.props.guessed}> 
                    <div ></div>
                    <div >
                        <img className="card" src={this.props.icon} alt="fruit"></img>
                    </div>
               </FlipCard>
            </div>
        );
    }
};

export default Card;