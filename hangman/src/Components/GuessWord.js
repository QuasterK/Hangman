import React, { Component } from 'react';
import {connect} from 'react-redux';

class GuessWord extends Component {
    constructor(props){
        super(props)

        this.state = {
            contacts: ' '
        }
    }
    componentDidMount(){
        fetch('https://favqs.com/api/qotd')
            .then(res => res.json())
            //sending quote to store
            .then(json => {
                this.props.new_quote(json.quote.body);
                this.props.new_author(json.quote.author);
            })
    }
    render() {
        let guessedWord = this.props.guessWord;
        let guess = guessedWord.map(letter => {
           if(this.props.usedLetters.includes(letter.toUpperCase())){
               return letter;
           }else return '_ '
        });
        return (
            <div className='alphabet-container'>
                {guess}
                <div>{this.props.author}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        guessWord: [...state.guessWord.word],
        usedLetters: state.alphabet.usedLetters,
        guess: state.guessWord.lettersToGuess,
        author: state.guessWord.author,
    }
};

const mapDispatchToState = dispatch =>{
    return {
        deactivate_letter: (letter) => {dispatch({type: "CLICKED_LETTER", letter:letter})},
        count_letters: (count) => {dispatch({type: "COUNT_LETTERS", count})},
        new_quote: (quote) => {dispatch({type: "NEW_WORD", quote})},
        new_author: (author) => {dispatch({type: "NEW_AUTHOR", author})},

    }
};
export default connect(mapStateToProps, mapDispatchToState)(GuessWord);