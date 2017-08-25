import * as React from "react";
import { connect } from 'react-redux';
import { Phase } from '../reducers/index';

function mapStateToProps(state:any){
    return {
        name: state.form.name,
        message: state.form.message,
    };
};


function mapDispatchToProps(dispatch: Function) {
    return {
        nameOnChange: (event:any) => dispatch({type: 'FORM_NAME_SET', value:event.target.value}),
        messageOnChange: (event:any) => dispatch({type: 'FORM_MESSAGE_SET', value:event.target.value}),
        moveToNextPhase: () => {


            dispatch({type: 'PHASE_SET', value:Phase.DONATE_LOADING})

            //todo load


        }
    };
}


function Form({name,message,nameOnChange,messageOnChange,moveToNextPhase}:any) {

    return (
        <div>
            <form>
                <label>
                    Jméno:
                    <input type="text" maxLength={200} defaultValue={name} onChange={nameOnChange}/>
                </label>
                <label>
                    Vzkaz:
                    <textarea maxLength={255} defaultValue={message} onChange={messageOnChange}/>
                </label>

                {/*todo In future here should be currency selector.*/}
                <input type="hidden" name="currency" value="BTC"/>
                <button onClick={moveToNextPhase}>
                    Darovat!
                </button>
            </form>


            Pozor posílej pouye Bitcoin ne Bitcoin Cash
        </div>
    );

}


export default connect(mapStateToProps,mapDispatchToProps)(Form);