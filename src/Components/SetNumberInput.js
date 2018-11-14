import React, {Fragment} from 'react';
import Validate from './svg/Validate';

class SetNumberInput extends React.Component{
    updatePlayersNumber = () => {
        this.props.setPlayer(this.refs.setNumberInput.value);
        this.props.setEditMode();
        const buttonAddPlayer = document.querySelector('.btn-add-player');
        const buttonStartGame = document.querySelector('.btn-start');
        buttonAddPlayer.style.display='flex';
        buttonStartGame.style.display='block';
    }

    render(){    
        return(
            <Fragment>
                <input ref="setNumberInput" className="edit-input" type="number" placeholder="Choose number of players"/>
                <div className="btn-svg btn-validate-edit" onClick={this.updatePlayersNumber}><Validate /></div>
            </Fragment>
        );
    }
}

export default SetNumberInput;