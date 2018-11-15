import React from 'react';
import Validate from './svg/Validate';

class EditScoreInput extends React.Component{
    addScoreToPlayer = (event) => {
        const score = this.refs.editScoreInput.value;
        const error = event.currentTarget.parentNode.firstChild;
        const index = this.props.index;
        if(score.trim() === "" || isNaN(score)){
            error.style.display="block";
        }else{
            error.style.display="none";
            this.props.displayScorePerTurn(index,parseInt(score,10));
        }
        this.refs.editScoreInput.value="";
    }

    render(){
        return(
            <div className="score">
                <span className="score__error">Enter valid number</span>
                <input ref="editScoreInput" className="edit-input edit-input--score" type="text"/><div className="btn-svg btn-add-score" onClick={(event)=>this.addScoreToPlayer(event)}><Validate /></div>
            </div>
        );
    }
}

export default EditScoreInput;