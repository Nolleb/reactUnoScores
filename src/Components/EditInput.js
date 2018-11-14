import React from 'react';
import Validate from './svg/Validate';
import Cancel from './svg/Cancel';

class EditInput extends React.Component {
    updateName = () => {
        const playerName = this.refs.editInput.value;
        const index = this.props.index;
        this.props.updatePlayerName(playerName, index);
        this.props.setEditMode();
    }
    render(){
        return(
            <div className="edit-field">
                <input type="text" ref="editInput" className="edit-input" placeholder={this.props.playerName} defaultValue={this.props.playerName}/>
                <div className="btn-svg btn-validate-edit" onClick={this.updateName}><Validate /></div>
                <div className="btn-svg" onClick={this.props.setEditMode}><Cancel /></div>
            </div>
        );
    }
}

export default EditInput;