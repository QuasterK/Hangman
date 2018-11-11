
const initState = {
    letters: [
        {letter : 'A',
             clicked: false},
        {letter : 'B',
            clicked: false},
        {letter : 'C',
            clicked: false},
        {letter : 'D',
            clicked: false},
        {letter : 'E',
            clicked: false},
        {letter : 'F',
            clicked: false},
        {letter : 'G',
            clicked: false},
        {letter : 'H',
            clicked: false},
        {letter : 'I',
            clicked: false},
        {letter : 'J',
            clicked: false},
        {letter : 'K',
            clicked: false},
        {letter : 'L',
            clicked: false},
        {letter : 'M',
            clicked: false},
        {letter : 'N',
            clicked: false},
        {letter : 'O',
            clicked: false},
        {letter : 'P',
            clicked: false},
        {letter : 'Q',
            clicked: false},
        {letter : 'R',
            clicked: false},
        {letter : 'S',
            clicked: false},
        {letter : 'T',
            clicked: false},
        {letter : 'U',
            clicked: false},
        {letter : 'V',
            clicked: false},
        {letter : 'W',
            clicked: false},
        {letter : 'X',
            clicked: false},
        {letter : 'Y',
            clicked: false},
        {letter : 'Z',
            clicked: false},

    ],
    usedLetters: [],
};

const alphabetReducer = (state= initState, action) =>{
    if(action.type === 'CLICKED_LETTER'){
        let newLettersArray = state.letters.filter(letters => {
            return action.letter !== letters.letter
        });
        return {
            ...state,
            letters: newLettersArray
        }
    }
    if(action.type === 'USED_LETTER'){
        let newUsedLettersArray = [...state.usedLetters, action.letter];
        return {
            ...state,
            usedLetters: newUsedLettersArray,
        }
    }
    return state
};

export default alphabetReducer;