import React from 'react';
import SetNumberInput from './SetNumberInput';

function SetPlayersNb (props){
    return(
        <div className="container-start">
            {props.isInEditMode?<SetNumberInput setEditMode={props.setEditMode} setPlayer={props.setPlayer}/>:<div className="container-heading"><img className="img-logo" src="../images/uno-logo.png" width="100px" alt="Uno game"/></div>}
        </div>
    );
}

export default SetPlayersNb;