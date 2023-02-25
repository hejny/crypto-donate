import * as React from "react";
import { connect } from 'react-redux';
import { Phase } from '../../reducers/index';
import Form from "./01-form";
import Donate from "./02-donate";
import Thanks from "./03-thanks";


function mapStateToProps(state:any){
    return {
        phase: state.phase,
    };
}


function Workflow({phase}:{phase:Phase}) {
    switch(phase){
        case Phase.FORM:
            return <Form/>;

        case Phase.DONATE:
            return <Donate/>;

        case Phase.THANKS:
            return <Thanks/>;
    }
}

export default connect(mapStateToProps)(Workflow);