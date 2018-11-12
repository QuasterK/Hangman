
const initState = {
    gameOver: false,

};

const gameOverReducer = (state= initState, action) => {
    if (action.type === 'GAME_OVER') {
        return {
            ...state,
            gameOver: action.gameOver,
        };
    }
    return state
};

export default gameOverReducer;