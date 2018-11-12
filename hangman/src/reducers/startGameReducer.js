
const initState = {
    start: false,

};

const startGameReducer = (state= initState, action) => {
    if (action.type === 'START_GAME') {
        return {
            ...state,
            start: action.start,
        };
    }
    return state
};

export default startGameReducer;