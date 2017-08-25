import * as React from "react";
import { connect } from 'react-redux';
import * as FontAwesome from 'react-fontawesome';
//import * as requestPromise from 'request-promise';
import { IState, Phase } from '../../reducers/index';
//import {API_URL} from '../../config';

function mapStateToProps(state:IState){
    return {
        donate: state.donate,
    };
}


 function mapDispatchToProps(dispatch: Function) {
     return {
         newDonate: () => dispatch({type: 'PHASE_SET', value:Phase.FORM}),
     };
 }


function Thanks({donate,newDonate}:any) {



    return (
        <div className="phase phase-thanks">
            Děkuji ti za tvůj dar {donate.received} BTC.

            <button onClick={newDonate}>
                <FontAwesome name="repeat"/> Darovat ještě jednou
            </button>

        </div>
    );

}


export default connect(mapStateToProps,mapDispatchToProps)(Thanks);