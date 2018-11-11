import React, { Component } from 'react';
import Alphabet from './Alphabet';
import GuessWord from './GuessWord';
import MistakesCounter from './MistakesCounter';
import Hangman from './Hangman';

class Home extends Component {

    render() {

        return (
            <div className='home-container'>
                <GuessWord/>
                <Alphabet/>
                <MistakesCounter/>
                <Hangman/>
            </div>
        );
    }
}

export default Home;
