import {combineReducers, createStore, legacy_createStore} from 'redux';
import {CountReducer} from '../Reducers/CountReduser/CountReducer';
import {Counter} from '../components/Counter/Counter';

const rootReducers=combineReducers({
    counter: CountReducer
})

export const store=legacy_createStore(rootReducers)

export type RootAppReducersType=ReturnType<typeof rootReducers>

// @ts-ignore
window.store=store