import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleWare from 'redux-thunk';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleWare));
const store = createStore(reducer, composedEnhancer);

export default store;