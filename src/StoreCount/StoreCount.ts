import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import {CounterActionType, CountReducer} from '../Reducers/CountReduser/CountReducer';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {useDispatch} from 'react-redux';
import {loadState, saveState} from '../utilus/localsorage-utils';

const rootReducers = combineReducers({
    counter: CountReducer
});


export type RootAppReducersType = ReturnType<typeof rootReducers>

export type AppActionsType = CounterActionType


export const store = legacy_createStore(rootReducers, loadState(), applyMiddleware(thunk));

store.subscribe(() => {
    saveState(store.getState());
});


export type ThunkType = ThunkDispatch<RootAppReducersType, unknown, AppActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootAppReducersType, unknown, AppActionsType>
type DispatchFunc = () => ThunkType
export const useAppDispatch: DispatchFunc = useDispatch;

// @ts-ignore
window.store = store;