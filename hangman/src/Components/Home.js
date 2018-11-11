import React, { Component } from 'react';
import Alphabet from './Alphabet';

class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            word: 'hello',
        }
    }

    render() {
        let guessedWord = [...this.state.word];
        let guess = guessedWord.map(letter => '_ ');
        return (
            <div className='home-container'>
                {guess}
                <Alphabet/>
            </div>
        );
    }
}

export default Home;
