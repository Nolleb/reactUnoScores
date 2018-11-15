import React from 'react';
import List from './svg/List';

class BtnEndTurn extends React.Component{
    render(){
        return(
            <div> 
                <div className="container-end-turn"><button className="btn btn-end-turn" onClick={this.props.orderPlayerByScore}>Show ranking <List /></button></div>
                <div className="u-center-text"><button className="btn btn-reset" >New game</button></div> 
            </div>
        );
    }
}

export default BtnEndTurn;