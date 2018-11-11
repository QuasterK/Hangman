import {createStore, combineReducers} from 'redux';
//import reducers
import alphabetReducer from './reducers/alphabetReducer';
import guessWordReducer from './reducers/guessWordReducer';

const rootReducer = combineReducers({
    alphabet : alphabetReducer,
    guessWord: guessWordReducer,
});

const store = createStore(
    rootReducer,
);

export default store;
