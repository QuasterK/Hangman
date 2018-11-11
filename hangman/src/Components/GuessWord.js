import React, { Component } from 'react';
import {connect} from 'react-redux';

class GuessWord extends Component {
    render() {
        let guessedWord = this.props.guessWord;
        let guess = guessedWord.map(letter => {
           if(this.props.usedLetters.includes(letter.toUpperCase())){
               return letter;
           }else return '_ ';
        });
        return (
            <div className='alphabet-container'>
                {guess}
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        guessWord: [...state.guessWord.word],
        usedLetters: state.alphabet.usedLetters,
    }
};

const mapDispatchToState = dispatch =>{
    return {
        deactivate_letter: (letter) => {dispatch({type: "CLICKED_LETTER", letter:letter})}
    }
};
export default connect(mapStateToProps, mapDispatchToState)(GuessWord);