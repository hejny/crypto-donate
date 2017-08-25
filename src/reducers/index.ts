export enum Phase{
    FORM,
    DONATE,
    THANKS
}

export enum LoadingPhase{
    SUCCESS,
    LOADING,
    ERROR
}

export interface IState{
    phase: Phase,
    loadingPhase: LoadingPhase,
    form:{
        name: string,
        message: string,
        currency: string,//todo maybe enum
    },
    address: null | string
}

export const defaultState = {
    phase: Phase.FORM,
    loadingPhase: LoadingPhase.SUCCESS,
    form: {
        name: '',
        message: '',
        currency: 'bitcoin'
    },
    address: null
};

export default function state(state: IState = defaultState, action: { type: string, value: any } ): IState {

    try {
        return {
            phase: action.type === 'PHASE_SET' ?
                action.value :
                state.phase,
            loadingPhase: action.type === 'LOADINGPHASE_SET' ?
                action.value :
                state.loadingPhase,
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