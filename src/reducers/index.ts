import * as _ from 'lodash';

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
    donate:{
        uuid: null | string,
        name: string,
        message: string,
        currency: string,//todo maybe enum
        address: null | string,
        received: number
    }
}

export const defaultState:IState = {
    phase: Phase.FORM,
    loadingPhase: LoadingPhase.SUCCESS,
    donate: {
        uuid:null,
        name: '',
        message: '',
        currency: 'bitcoin',
        address:null,
        received:0
    }
};

export default function state(state: IState = defaultState, action: { type: string, value: any } ): IState {

    try {
        return {
            phase: action.type === 'PHASE_SET' ?
                action.value :
                state.phase,
            loadingPhase: action.type === 'LOADINGPHASE_SET' ?
                action.value:
                (
                    (action.type === 'PHASE_SET' && action.value===Phase.FORM) ?
                    LoadingPhase.SUCCESS:
                    state.loadingPhase
                ),

            donate: action.type === 'DONATE_UPDATE' ?
                 _.assignIn({},state.donate,action.value):
                state.donate
        };
    } catch (error) {

        console.warn('Reducer error',error);
        return defaultState;

    }

}