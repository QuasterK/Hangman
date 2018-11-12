import {createStore, combineReducers} from 'redux';
//import reducers
import alphabetReducer from './reducers/alphabetReducer';
import guessWordReducer from './reducers/guessWordReducer';
import startGameReducer from "./reducers/startGameReducer";
import gameOverReducer from "./reducers/gameOverReducer";

const rootReducer = combineReducers({
    alphabet : alphabetReducer,
    guessWord: guessWordReducer,
    start: startGameReducer,
    gameOver: gameOverReducer,
});

const store = createStore(
    rootReducer,
);

export default store;
