
const initState = {
    word: 'HELLO WORLD',
    lettersToGuess: 0,
    remainLetters: null,
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
    return state
};

export default guessWordReducer;