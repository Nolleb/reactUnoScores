import React from 'react';
import SetNumberInput from './SetNumberInput';
import HeaderLogo from './HeaderLogo';

function SetPlayersNb (props){
    return(
        <div className="container-start">
            {props.isInEditMode?<SetNumberInput setEditMode={props.setEditMode} setPlayer={props.setPlayer}/>:<HeaderLogo setEditMode={props.setEditMode}/>}
        </div>
    );
}

export default SetPlayersNb;