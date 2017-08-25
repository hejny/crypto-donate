import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import * as requestPromise from 'request-promise';
import stateReducer from './reducers';
import { defaultState, /*Phase, LoadingPhase*/ } from './reducers';
import Root from './components/root';
//import { loadState, saveState } from './tools/state-saver';
import wrapReducer from './tools/wrap-reducer';
//import {API_URL} from './config';

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




/*
setInterval(()=>{
    const state = store.getState();
    if(state.phase === Phase.DONATE && state.loadingPhase === LoadingPhase.SUCCESS){

        store.dispatch({type: 'LOADINGPHASE_SET', value:LoadingPhase.LOADING});

        var options = {
            method: 'GET',
            uri: API_URL+'/donates/',
            json: true
        };

        requestPromise(options)
            .then(function (parsedBody) {
                console.log(parsedBody);
                store.dispatch({type: 'ADDRESS_SET', value:parsedBody.address});
                store.dispatch({type: 'PHASE_SET', value:Phase.DONATE});
                store.dispatch({type: 'LOADINGPHASE_SET', value:LoadingPhase.SUCCESS});
            })
            .catch(function (error) {
                store.dispatch({type: 'LOADINGPHASE_SET', value:LoadingPhase.ERROR});
            });



    }
    //import {API_URL} from '../../config';

});*/