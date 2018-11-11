import React, { Component } from 'react';


class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            word: 'hello',
        }
    }

    render() {
        let guessedWord = [...this.state.word];
        console.log(guessedWord);
        let guess = guessedWord.map(letter => '_ ');
        return (
            <div className='home-container'>
                {guess}
            </div>
        );
    }
}

export default Home;
