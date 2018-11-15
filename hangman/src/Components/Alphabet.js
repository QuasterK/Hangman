import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../scss/Alphabet.scss'

class Alphabet extends Component {

    handleStart = () =>{
        this.props.start_game(true);

        // creating array of letters used in guessing word
        let wordToGuess = this.props.guessWord.toUpperCase();
        let letters;
        //array of signs
        let signs = this.props.usedLetters.concat(' ') ;
        //filter only letters from sentence
        letters = [...wordToGuess].filter(item => {
            let newArray;
            if (!signs.includes(item)){
                newArray = item;
                return newArray;
            }
            return newArray;
        })
        //dispatching letters to store
        this.props.remain_letters(letters);
        //dispatching number of letters to guess
        this.props.count_letters(letters.length)

    };

    handleClick = e => {
        //deleting chosen letter from array
        this.props.deactivate_letter(e.target.innerText);

        //add letter to used letters array
        this.props.use_letter(e.target.innerText);

        // creating array of ungeussed and remained number of letters to guess
        let word = this.props.remain;
        console.log('word:' + word)
        let remainLetters;
        if (word.includes(e.target.innerText)) {
            remainLetters = word.filter(letter => {
                return letter !== e.target.innerText
            });
            //create array of letters that contain the word and are unused by player
            this.props.remain_letters(remainLetters);

            this.props.count_letters(remainLetters.length)
            //win game - promises
                .then(remainLetters.length === 0 ? this.props.game_over(true) : console.log('nie'))

        }else{
            //number of mistakes
            this.props.mistake(this.props.numberOfMistakes + 1)
                .then(() =>console.log(this.props.numberOfMistakes))
                ////checking if number of mistakes equal 4 - game over - used promises
                .then(() => {
                    this.props.numberOfMistakes === 4 ? this.props.game_over(true) : console.log('nie')
                })
        }


        //win game
        if(this.props.lettersToGuess === 0){
            this.props.game_over(true)
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
        lettersToGuess: state.guessWord.lettersToGuess

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
            dispatch({
                type: "COUNT_LETTERS", count
            });
            return Promise.resolve()
        },
        remain_letters: (remain) => {
            dispatch({type: "REMAIN_LETTERS", remain})
            return Promise.resolve()
        },
        mistake: (mistake) => {
            dispatch({type: "MISTAKE", mistake
            });
            return Promise.resolve()
        },
        start_game: (start) => {
            dispatch({type: "START_GAME", start})
        },
        game_over: (gameOver) => {
            dispatch({
                type: "GAME_OVER", gameOver
            });
            return Promise.resolve()
        },
    }
};
export default connect(mapStateToProps, mapDispatchToState)(Alphabet);