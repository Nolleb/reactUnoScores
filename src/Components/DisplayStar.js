import React from 'react';

class DisplayStar extends React.Component{
    render(){
        const stars = this.props.players.star;
        return (
            <div className="score__stars">
                <ul className="score-stars__list">
                    {stars.map((el, key)=>
                        <li className="score-stars__item" key={key}>{el}</li>
                        )}
                </ul>
            </div>
        );
    }
}

export default DisplayStar;