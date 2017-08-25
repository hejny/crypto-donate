import * as React from "react";
import * as FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { IState, Phase } from '../../reducers/index';

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
        <div className="phase  phase-donate">



            <h2>
                <FontAwesome name="spinner" spin/>
                Čekám na dar
            </h2>


            <ul>
                <li><img src={`https://blockchain.info/qr?data=${donate.address}&size=200`}/></li>
                <li>{donate.address}</li>
            </ul>

            <ul>
                <li><a href={`https://blockchain.info/address/${donate.address}`} target="_blank">Otevřít na Blockchain.info</a></li>
                <li><a href={`bitcoin:${donate.address}`} target="_blank">Otevřít v peněžence</a></li>
            </ul>

            <div className="warning bcc">
                <FontAwesome name="warning"/>
                Posílej pouze Bitcoin ne Bitcoin Cash
            </div>


            <button onClick={newDonate}>
                <FontAwesome name="pencil"/> Změnit jméno nebo zprávu
            </button>


        </div>
    );

}


export default connect(mapStateToProps,mapDispatchToProps)(Donate);