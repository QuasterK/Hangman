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
        console.log(this.props.quote);
        console.log(this.props.lettersToGuess)
        return (
            <div className='home-container'>
                <div className='logo'>HA_GMA_</div>

                {this.props.gameOver ?
                   <div>
                       <div>{this.props.lettersToGuess === 0 ? "CONGRATULATION" : 'GAME OVER'}</div>
                       <div>{this.props.quote}</div>
                       <div>{this.props.author}</div>
                       <div onClick={this.handleNewGame}>PLAY AGAIN ? </div>
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
