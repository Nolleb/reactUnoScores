import React from 'react';

class DisplayAllscores extends React.Component{
    
    render(){
        const scores = this.props.players.score;
        return(
            <div className="score-all">
                <ul className="score-all__list">
                    {scores.map((el, key)=>
                        <li className="score-all__item" key={key}>{el}</li>
                        )}
                </ul>
                <div className="score-all__total">
                    {scores.reduce((a, b) => a + b, 0)}
                </div>
            </div>
        );
    }
}

export default DisplayAllscores;