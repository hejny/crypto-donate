import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'lodash';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import stateReducer from './reducers';
import { defaultState } from './reducers';
import Root from './components/root';
import { loadState, saveState } from './tools/state-saver';
import wrapReducer from './tools/wrap-reducer';
import setCheckingInterval from './tools/autocheck-donate';

import './style/index.css';


const savedState = loadState(defaultState);
const compatibileState = _.assignIn({},defaultState,savedState);

const store = createStore(wrapReducer(stateReducer), compatibileState);
store.subscribe(() => {
    const state = store.getState();
    saveState(state);
});

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root') as HTMLElement
);

setCheckingInterval(store);