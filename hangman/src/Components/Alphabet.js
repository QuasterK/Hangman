import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../scss/Alphabet.scss'

class Alphabet extends Component {
    handleStart = () =>{
        this.props.start_game(true);

        // creating array of letters used in guessing word
        let wordToGuess = this.props.guessWord.toUpperCase();
        let letters;
        let signs = this.props.usedLetters.concat(' ') ;
        letters = [...wordToGuess].filter(item => {
            let newArray;
            if (!signs.includes(item)){
                newArray = item;
                return newArray;
            }
            return newArray;
        })
        this.props.remain_letters(letters);
        // number of letters to guess
        this.props.count_letters(letters.length)
    };
    handleClick = e => {
        //deleting chosen letter from array
        this.props.deactivate_letter(e.target.innerText);

        //use letter
        this.props.use_letter(e.target.innerText);

        // creating array of ungeussed and remained number of letters to guess
        let word = this.props.remain;
        let remainLetters;
        if (word.includes(e.target.innerText)) {
            remainLetters = word.filter(letter => {
                return letter !== e.target.innerText
            });
            this.props.remain_letters(remainLetters);
            this.props.count_letters(remainLetters.length);
        }else{
            //mistakes
            this.props.mistake(this.props.numberOfMistakes + 1);
        }
    };

    render() {

        //creating array of letters
        let arrayOfLetters = this.props.alphabet;
        let letters = arrayOfLetters.map((letter, i) => {
            return <div key={i} className={letter.clicked === true ? 'letter-clicked' : 'letter-active'}
                        onClick={this.handleClick}> {letter.letter}</div>
        });

        //displaying alphabet
        return (
            <div className='alphabet-container'>
                {this.props.startGame === true ? <div>{letters}</div> : <div className='alphabet-startButton' onClick={this.handleStart}>START GAME</div>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        alphabet: state.alphabet.letters,
        guessWord: state.guessWord.word,
        usedLetters: state.alphabet.usedLetters,
        remain: state.guessWord.remainLetters,
        numberOfLettersToGuess: state.guessWord.lettersToGuess,
        numberOfMistakes: state.guessWord.numberOfMistakes,
        startGame: state.start.start,

    }
};

const mapDispatchToState = dispatch => {
    return {
        deactivate_letter: (letter) => {
            dispatch({type: "CLICKED_LETTER", letter: letter})
        },
        use_letter: (letter) => {
            dispatch({type: "USED_LETTER", letter: letter})
        },
        count_letters: (count) => {
            dispatch({type: "COUNT_LETTERS", count})
        },
        remain_letters: (remain) => {
            dispatch({type: "REMAIN_LETTERS", remain})
        },
        mistake: (mistake) => {
            dispatch({type: "MISTAKE", mistake})
        },
        start_game: (start) => {
            dispatch({type: "START_GAME", start})
        },
    }
};
export default connect(mapStateToProps, mapDispatchToState)(Alphabet);