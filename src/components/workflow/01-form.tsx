import * as React from "react";
import * as FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import * as requestPromise from 'request-promise';
import { API_URL } from '../../config';
import { IState, LoadingPhase, Phase } from '../../reducers/index';

function mapStateToProps(state:IState){
    return {
        name: state.donate.name,
        message: state.donate.message,
        isLoading: state.loadingPhase===LoadingPhase.LOADING,
        isError: state.loadingPhase===LoadingPhase.ERROR,
    };
}


function mapDispatchToProps(dispatch: Function) {
    return {
        nameOnChange: (event:any) => dispatch({type: 'DONATE_UPDATE', value:{name:event.target.value}}),
        messageOnChange: (event:any) => dispatch({type: 'DONATE_UPDATE', value:{message:event.target.value}}),
        moveToNextPhase: (name:string,message:string,event:any) => {

            event.preventDefault();
            console.log(event);

            dispatch({type: 'LOADINGPHASE_SET', value:LoadingPhase.LOADING});

            const options = {
                method: 'POST',
                uri: API_URL+'/donates',
                body: {
                    name,
                    message,
                    currency: 'BTC'
                },
                json: true
            };

            requestPromise(options)
                .then(function (parsedBody) {
                    //console.log(parsedBody);
                    dispatch({type: 'DONATE_UPDATE', value:parsedBody.data});
                    dispatch({type: 'PHASE_SET', value:Phase.DONATE});
                    dispatch({type: 'LOADINGPHASE_SET', value:LoadingPhase.SUCCESS});
                })
                .catch(function (error) {
                    dispatch({type: 'LOADINGPHASE_SET', value:LoadingPhase.ERROR});
                });





        }
    };
}


function Form({name,message,nameOnChange,messageOnChange,moveToNextPhase,isLoading,isError}:any) {



    return (
        <div className="phase phase-form">


            {isError?
                <div className="warning">
                    <FontAwesome name="warning"/>
                    Nastala chyba v načítání, zkus prosím odeslat formulář ještě jednou.
                </div>
                :undefined}



            <form>
                <label>
                    Jméno:
                    <input type="text" maxLength={200} defaultValue={name} onChange={nameOnChange} disabled={isLoading}/>
                </label>
                <label>
                    Vzkaz:
                    <textarea maxLength={255} defaultValue={message} onChange={messageOnChange} disabled={isLoading}/>
                </label>
                <label>
                    Kryptoměna:
                    <select>
                        <option value="BTC">Bitcoin</option>
                    </select>
                </label>


                <button onClick={moveToNextPhase.bind(null,name,message)}>
                    {isLoading?<span><FontAwesome name="spinner" spin/> Načítání</span>:'Darovat!'}
                </button>
            </form>


        </div>
    );

}


export default connect(mapStateToProps,mapDispatchToProps)(Form);