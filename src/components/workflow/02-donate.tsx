import * as React from "react";
import { connect } from 'react-redux';
//import * as requestPromise from 'request-promise';
import { IState } from '../../reducers/index';
//import {API_URL} from '../../config';

function mapStateToProps(state:IState){
    return {
        address: state.donate.address,
    };
}

/*
function mapDispatchToProps(dispatch: Function) {
    return {
    };
}*/


function Donate({address}:any) {



    return (
        <div>
            Donate phase
            {address}


            <img src={`https://blockchain.info/qr?data=${address}&size=200`}/>
            <a href={`https://blockchain.info/address/${address}`} target="_blank">Otevřít na Blockchain.info</a>
            <a href={`bitcoin:${address}`}>Otevřít v peněžence</a>


        </div>
    );

}


export default connect(mapStateToProps/*,mapDispatchToProps*/)(Donate);