import {createStore, combineReducers} from 'redux';
//import reducers
import alphabetReducer from './reducers/alphabetReducer';

const rootReducer = combineReducers({
    alphabet : alphabetReducer,
});

const store = createStore(
    rootReducer,
);

export default store;
