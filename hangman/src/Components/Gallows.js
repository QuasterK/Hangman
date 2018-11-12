import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../scss/Gallows.scss'
class Gallows extends Component {
    render(){
        //displaying image of hangman
        let mistake = this.props.numberOfMistakes;
        return (
            <div className='gallows-container'>
                <div className='gallows-background'>
                    {mistake >= 1 ? <div className='hangman-head'/> : false}
                    {mistake >= 2 ? <div className='hangman-belly'/> : false}
                    {mistake >= 3 ? <div className='hangman-hands'/> : false}
                    {mistake >= 4 ? <div className='hangman-legs'/> : false}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        numberOfMistakes: state.guessWord.numberOfMistakes,
    }
};

export default connect(mapStateToProps)(Gallows);