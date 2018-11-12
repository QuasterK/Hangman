import React, { Component } from 'react';
import {connect} from 'react-redux';

class Hangman extends Component {
    render(){

        //displaying image of hangman
        let mistake = this.props.numberOfMistakes;
        let hangman = () => {
            if(mistake <= 0){
                return <div className='hangman-gallows'/>
            }
            if(mistake <= 1){
                return <div className='hangman-head'/>
            }
            if(mistake <=2){
                return <div className='hangman-belly'/>
            }
            if(mistake <= 3){
                return <div className='hangman-hands'/>
            }
            if(mistake <= 4){
                return <div className='hangman-legs'/>
            }
        };

        return (
            <div className='mistake-container'>
                {hangman()}
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        numberOfMistakes: state.guessWord.numberOfMistakes,
    }
};

export default connect(mapStateToProps)(Hangman);