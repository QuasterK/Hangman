
const initState = {
    word: 'HELLO WORLD',
    lettersToGuess: 0,
    remainLetters: null,
    numberOfMistakes: 0,
};

const guessWordReducer = (state= initState, action) =>{
    if(action.type === 'COUNT_LETTERS'){
        let count = action.count;
        return {
            ...state,
            lettersToGuess: count,
        }
    }
    if(action.type === 'REMAIN_LETTERS'){
        return{
            ...state,
            remainLetters: action.remain,
        }
    }
    if(action.type === 'MISTAKE'){
        return{
            ...state,
            numberOfMistakes: action.mistake,
        }
    }
    return state
};

export default guessWordReducer;