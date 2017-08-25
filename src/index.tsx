import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import stateReducer from './reducers/index';
import { defaultState } from './reducers/index';
import Root from './components/root';
//import { loadState, saveState } from './tools/state-saver';
import wrapReducer from './tools/wrap-reducer';

const store = createStore(wrapReducer(stateReducer), defaultState);
/*store.subscribe(() => {
    const state = store.getState();
    saveState(state);
});*/

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root') as HTMLElement
);