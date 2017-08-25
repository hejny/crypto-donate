import * as React from "react";
import * as FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
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



function Donate({donate,newDonate}:any) {


    //todo show loading errors
    return (
        <div className="phase-donate">



            Donate phase

            Čekám na dar...
            <FontAwesome name="spinner" spin/>

            {donate.address}


            <img src={`https://blockchain.info/qr?data=${donate.address}&size=200`}/>
            <a href={`https://blockchain.info/address/${donate.address}`} target="_blank">Otevřít na Blockchain.info</a>
            <a href={`bitcoin:${donate.address}`} target="_blank">Otevřít v peněžence</a>


            Pozor posílej pouze Bitcoin ne Bitcoin Cash



            <button onClick={newDonate}>
                <FontAwesome name="pencil"/> Změnit jméno nebo zprávu
            </button>


        </div>
    );

}


export default connect(mapStateToProps,mapDispatchToProps)(Donate);