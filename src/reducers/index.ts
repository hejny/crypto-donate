export enum Phase{
    FORM,
    DONATE_LOADING,
    DONATE_LOADING_ERROR,
    THANKS
}

export interface IState{
    phase: Phase,
    form:{
        name: string,
        message: string,
        currency: string,//todo maybe enum
    },
    address: null|string
}

export const defaultState = {
    phase: Phase.FORM,
    form: {
        name: '',
        message: '',
        currency: 'bitcoin'
    },
    address: null
};

export default function state(state:IState=defaultState, action: {type:string,value:any}):IState {

    try {
        return {
            phase: action.type === 'PHASE_SET' ?
                action.value :
                state.phase,
            form: {
                name: action.type === 'FORM_NAME_SET' ?
                    action.value :
                    state.form.name,
                message: action.type === 'FORM_MESSAGE_SET' ?
                    action.value :
                    state.form.message,
                currency: action.type === 'FORM_CURRENCY_SET' ?
                    action.value :
                    state.form.currency,
            },
            address: action.type === 'ADDRESS_SET' ?
                action.value :
                state.address,
        };
    } catch (error) {

        console.warn('Reducer error',error);
        return defaultState;

    }

}