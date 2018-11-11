import React, { Component } from 'react';
import {connect} from 'react-redux';

class Alphabet extends Component {
    handleClick = e =>{
        this.props.deactivate_letter(e.target.innerText);
        this.props.use_letter(e.target.innerText);
    };
    render() {
        let arrayOfLetters = this.props.alphabet;
        let letters = arrayOfLetters.map ( (letter, i) => {
            return <div key={i} className={letter.clicked === true ? 'letter-clicked' : 'letter-active'} onClick={this.handleClick}> {letter.letter}</div>
        });
        return (
            <div className='alphabet-container'>
                {letters}
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        alphabet: state.alphabet.letters,
    }
};

const mapDispatchToState = dispatch =>{
    return {
        deactivate_letter: (letter) => {dispatch({type: "CLICKED_LETTER", letter:letter})},
        use_letter: (letter) => {dispatch({type: "USED_LETTER", letter:letter})}
    }
};
export default connect(mapStateToProps, mapDispatchToState)(Alphabet);