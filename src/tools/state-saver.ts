import { IState, defaultState } from '../reducers/index';


export function loadState(): IState {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return defaultState;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return defaultState;
    }
}

export function saveState(state: IState|undefined) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
        return true;
    } catch (error) {
        return false;
    }
}