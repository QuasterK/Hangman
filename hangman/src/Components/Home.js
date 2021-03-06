import React, {Component} from 'react';
import Alphabet from './Alphabet';
import GuessWord from './GuessWord';
import MistakesCounter from './MistakesCounter';
import Gallows from './Gallows';
import '../scss/Home.scss';
import {connect} from 'react-redux';

class Home extends Component {
    handleNewGame = () => {
        this.props.game_over(false);
        this.props.new_game();
    };

    render() {

        return (
            <div className='home-container'>
                <div className='logo'>HA_GMA_</div>

                {this.props.gameOver ?
                   <div className='gameOver-container'>
                       <div className='gameOver-text'>{this.props.lettersToGuess === 0 ? "CONGRATULATION" : 'GAME OVER'}</div>
                       <div className='gameOver-quote'>"{this.props.quote}"</div>
                       <div className='gameOver-author'>~{this.props.author}</div>
                       <div className='gameOver-button' onClick={this.handleNewGame}>PLAY AGAIN ? </div>
                   </div> :
                    (<div className='home-flex'>
                        <div className='home-app'>
                            <GuessWord/>
                            <Alphabet/>
                            <MistakesCounter/>
                        </div>
                        <Gallows/>
                    </div>)
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        gameOver: state.gameOver.gameOver,
        quote: state.guessWord.word,
        author: state.guessWord.author,
        lettersToGuess: state.guessWord.lettersToGuess,
    }
};

const mapDispatchToState = dispatch => {
    return {
        game_over: (gameOver) => {dispatch({type: "GAME_OVER", gameOver})},
        deactivate_letter: (letter) => {dispatch({type: "CLICKED_LETTER", letter:letter})},
        count_letters: (count) => {dispatch({type: "COUNT_LETTERS", count})},
        new_game: () => {dispatch({type:'NEW_GAME'})}
    }
};

export default connect(mapStateToProps, mapDispatchToState)(Home);
