import * as React from "react";
import { connect } from 'react-redux';
import Form from "./form";
import { Phase } from '../reducers/index';


function mapStateToProps(state:any){
    return {
        phase: state.phase,
    };
};



function Root({phase}:{phase:Phase}) {


    switch(phase){
        case Phase.FORM:
            return <Form/>;

        case Phase.DONATE:
            return(
                <div>
                    Loading
                </div>
            );

        case Phase.THANKS:
            return(
                <div>
                    Thanks
                </div>
            );

        /*default:
            return(
                <div>
                    Unknown
                </div>
            );*/
    }


}



export default connect(mapStateToProps)(Root);