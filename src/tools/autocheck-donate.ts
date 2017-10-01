import { Store } from 'redux';
import * as requestPromise from 'request-promise';
import { Phase, LoadingPhase, IState } from '../reducers';
import {API_URL} from '../config';


export default function setCheckingInterval(store:Store<IState>){

    setInterval(()=>{
        const state = store.getState();
        if(state.phase === Phase.DONATE && state.loadingPhase === LoadingPhase.SUCCESS){

            store.dispatch({type: 'LOADINGPHASE_SET', value:LoadingPhase.LOADING});

            const options = {
                method: 'GET',
                uri: API_URL+'/donates/'+state.donate.uuid,
                json: true
            };

            requestPromise(options)
                .then(function (parsedBody) {
                    //console.log(parsedBody);
                    store.dispatch({type: 'DONATE_UPDATE', value:parsedBody.data});
                    if(parsedBody.received>0){
                        store.dispatch({type: 'PHASE_SET', value:Phase.THANKS});
                    }
                    store.dispatch({type: 'LOADINGPHASE_SET', value:LoadingPhase.SUCCESS});
                })
                .catch(function (error) {
                    store.dispatch({type: 'LOADINGPHASE_SET', value:LoadingPhase.ERROR});
                });



        }

    },1000);
}