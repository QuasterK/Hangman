import React, { Component } from 'react';
import Alphabet from './Alphabet';
import GuessWord from './GuessWord';
class Home extends Component {

    render() {

        return (
            <div className='home-container'>
                <GuessWord/>
                <Alphabet/>
            </div>
        );
    }
}

export default Home;
