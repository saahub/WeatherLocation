import {createStore} from 'redux';
import { city } from './../reducers/city';

const inicialState = {
 city:'Buenos Aires'
};

const reducer =(state, action) => {
  return state;
}

export const store = createStore(reducer, inicialState, window.__REDUX_DEVTOOLS_EXTENSION__&&
window.__REDUX_DEVTOOLS_EXTENSION__());