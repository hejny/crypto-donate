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


function Thanks({address}:any) {



    return (
        <div>
            Thanks phase
            {address}
        </div>
    );

}


export default connect(mapStateToProps/*,mapDispatchToProps*/)(Thanks);