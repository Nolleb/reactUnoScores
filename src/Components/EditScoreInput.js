import React from 'react';

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
    checkNumber = (event) =>{
        console.log("focus");
        const score = parseInt(this.refs.editScoreInput.value, 10);
        const error = event.currentTarget.parentNode.firstChild;
        const index = this.props.index;
        let isNumber = true;
        if(isNaN(score)){
            isNumber = false;
            error.style.display="block";
        }else{
            error.style.display="none";
        }
        this.props.getErrorsFromInput(index, isNumber);
    }
    render(){
        return(
            <div className="score">
                <span className="score__error">Enter valid number</span>
                <input ref="editScoreInput" className="edit-input edit-input--score" type="text" onChange={(event)=>this.checkNumber(event)}/><button className="btn btn-add-score" onClick={(event)=>this.addScoreToPlayer(event)}>OK</button>
            </div>
        );
    }
}

export default EditScoreInput;