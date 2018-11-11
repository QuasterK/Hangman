import React, { Component } from 'react';
import {connect} from 'react-redux';

class MistakesCounter extends Component {
    render(){
        return (
            <div className='mistake-container'>
                <div>{this.props.numberOfMistakes}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        numberOfMistakes: state.guessWord.numberOfMistakes,
    }
};

export default connect(mapStateToProps)(MistakesCounter);