import {createStore, combineReducers} from 'redux';
//import reducers
import alphabetReducer from './reducers/alphabetReducer';
import guessWordReducer from './reducers/guessWordReducer';
import startGameReducer from "./reducers/startGameReducer";
import gameOverReducer from "./reducers/gameOverReducer";

const appReducer = combineReducers({
    alphabet : alphabetReducer,
    guessWord: guessWordReducer,
    start: startGameReducer,
    gameOver: gameOverReducer,
});


//restore initial state
const rootReducer = (state, action) => {
    if (action.type === 'NEW_GAME') {
        state = undefined
    }

    return appReducer(state, action)
};

const store = createStore(
    rootReducer,
);

export default store;
