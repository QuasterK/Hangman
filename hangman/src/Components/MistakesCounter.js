import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../scss/MistakesCounter.scss'

class MistakesCounter extends Component {
    render(){
        return (
            <div className='mistake-container'>
                <div className='mistake-description'>
                    <span className='mistake-description text'>Number of mistakes </span>
                    <span className='mistake-description number'>{this.props.numberOfMistakes}</span>
                </div>
                <div className='mistake-lettersToGuess'>
                    <span className='mistake-lettersToGuess text'>Number of letters to guess </span>
                    <span className='mistake-lettersToGuess number'>{this.props.toGuess}</span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        numberOfMistakes: state.guessWord.numberOfMistakes,
        toGuess: state.guessWord.lettersToGuess,
    }
};

export default connect(mapStateToProps)(MistakesCounter);