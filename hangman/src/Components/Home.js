import React, {Component} from 'react';
import Alphabet from './Alphabet';
import GuessWord from './GuessWord';
import MistakesCounter from './MistakesCounter';
import Gallows from './Gallows';
import '../scss/Home.scss'

class Home extends Component {

    render() {

        return (
            <div className='home-container'>
                <div className='logo'>HA_GMA_</div>
                <div className='home-flex'>
                    <div className='home-app'>
                        <GuessWord/>
                        <Alphabet/>
                        <MistakesCounter/>
                    </div>
                    <Gallows/>
                </div>
            </div>
        );
    }
}

export default Home;
