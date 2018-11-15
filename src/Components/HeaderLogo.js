import React from 'react';

class HeaderLogo extends React.Component{
    switchHeader = ()=>{
        this.props.setEditMode();
    }
    render(){
        return(
            <div className="container-heading">
                <img className="img-logo" src="../images/uno-logo.png" width="100px" alt="Uno game"/>
                <span className="hidden toggleHeader" onClick={this.switchHeader}></span>
            </div>
        );
    }
}

export default HeaderLogo;