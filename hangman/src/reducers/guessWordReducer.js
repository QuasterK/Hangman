
const initState = {
    word: ' ',
    author: null,
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
    if(action.type === 'NEW_WORD'){
        return {
            ...state,
            word: action.quote,
        }
    }
    if(action.type === "NEW_AUTHOR"){
        return {
            ...state,
            author: action.author,
        }
    }
    return state
};

export default guessWordReducer;