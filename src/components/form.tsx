import * as React from "react";
import { connect } from 'react-redux';
import * as requestPromise from 'request-promise';
import { Phase, LoadingPhase, IState } from '../reducers/index';
import {API_URL} from '../config';

function mapStateToProps(state:IState){
    return {
        name: state.form.name,
        message: state.form.message,
        isLoading: state.loadingPhase===LoadingPhase.LOADING,
        isError: state.loadingPhase===LoadingPhase.ERROR,
    };
}


function mapDispatchToProps(dispatch: Function) {
    return {
        nameOnChange: (event:any) => dispatch({type: 'FORM_NAME_SET', value:event.target.value}),
        messageOnChange: (event:any) => dispatch({type: 'FORM_MESSAGE_SET', value:event.target.value}),
        moveToNextPhase: (name:string,message:string,event:any) => {

            event.preventDefault();
            console.log(event);

            dispatch({type: 'LOADINGPHASE_SET', value:LoadingPhase.LOADING});

            var options = {
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
                    console.log(parsedBody);
                    dispatch({type: 'ADDRESS_SET', value:parsedBody.address});
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
        <div>
            <form>
                <label>
                    Jméno:
                    <input type="text" maxLength={200} defaultValue={name} onChange={nameOnChange} disabled={isLoading}/>
                </label>
                <label>
                    Vzkaz:
                    <textarea maxLength={255} defaultValue={message} onChange={messageOnChange} disabled={isLoading}/>
                </label>

                {/*todo In future here should be currency selector.*/}
                <input type="hidden" name="currency" value="BTC"/>
                <button onClick={moveToNextPhase.bind(null,name,message)}>
                    {isLoading?'Načítání':'Darovat!'}
                </button>
            </form>


            Pozor posílej pouye Bitcoin ne Bitcoin Cash
        </div>
    );

}


export default connect(mapStateToProps,mapDispatchToProps)(Form);