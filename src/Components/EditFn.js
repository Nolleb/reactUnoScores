import React, {Fragment} from 'react';

class EditFn extends React.Component {
    state={
        isInEditMode: true
    }
    setEditMode = () => {
        this.setState({
            isInEditMode: !this.state.isInEditMode
        })
    };

    render(){
        return (
            <Fragment>
              {this.props.children(this.state.isInEditMode, this.setEditMode)}
            </Fragment>
          )
    }
    
}


export default EditFn;