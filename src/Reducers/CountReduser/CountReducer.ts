import {AppThunk} from '../../StoreCount/StoreCount';

type StateType = {
    numbers: NumbersType,
    messages: MessagesType
}
export type NumbersType = {
    num: number,
    maxNum: number,
    minNum: number,
    maxNumForSettings: number,
    minNumForSettings: number,
}
export type MessagesType = {
    message: null | string,
    error: null | string
}

type OnClickIncAT = { type: 'INC' }
type OnClickRestAT = { type: 'REST' }
type onClickSetAT = { type: 'SET' }
type setErrorAT = { type: 'ERROR', titleError: string | null }
type setMessageAT = { type: 'MESSAGE', titleMessage: string | null }
export type OnChangeInputHandlerMinAT = { type: 'CHANGE-INPUT-MIN', value: number }
export type OnChangeInputHandlerMaxAT = { type: 'CHANGE-INPUT-MAX', value: number }


export type CounterActionType =
    OnClickIncAT
    | OnClickRestAT
    | onClickSetAT
    | setErrorAT
    | setMessageAT
    | OnChangeInputHandlerMinAT
    | OnChangeInputHandlerMaxAT| ReturnType<typeof getNumsAC>

let initialState: StateType = {
    numbers: {
        num: 0,
        maxNum: 5,
        minNum: 0,
        maxNumForSettings: 5,
        minNumForSettings: 0,

    },
    messages: {
        message: null,
        error: null
    }

};
export const CountReducer = (state: StateType = initialState, action: CounterActionType) => {
    switch (action.type) {
        case 'GET-NUMS':{
            debugger
            return {...state,numbers: {...state.numbers,...action.allNumberObj}}
        }
        case 'INC':
            return {...state, numbers: {...state.numbers, num: state.numbers.num + 1}};

        case 'REST':

            return {...state, numbers: {...state.numbers, num: state.numbers.minNum}};

        case 'SET':
            return {
                ...state,
                numbers: {
                    ...state.numbers, maxNum: state.numbers.maxNumForSettings,
                    minNum: state.numbers.minNumForSettings,
                    num: state.numbers.minNumForSettings
                },
                messages: {...state.messages, error: null, message: null}
            };
        case 'ERROR':
            return {...state, messages: {...state.messages, error: action.titleError}};
        case 'MESSAGE':
            return {...state, messages: {...state.messages, message: action.titleMessage}};
        case 'CHANGE-INPUT-MAX':
            return {...state, numbers: {...state.numbers, maxNumForSettings: action.value}};
        case 'CHANGE-INPUT-MIN':
            return {...state, numbers: {...state.numbers, minNumForSettings: action.value}};
        default:
            return state;
    }
};


export const onChangeInputHandlerMaxAC = (value: number): OnChangeInputHandlerMaxAT => ({
    type: 'CHANGE-INPUT-MAX',
    value
});
export const onChangeInputHandlerMinAC = (value: number): OnChangeInputHandlerMinAT => ({
    type: 'CHANGE-INPUT-MIN',
    value
});
export const onClickIncAC = (): OnClickIncAT => ({type: 'INC'});
export const getNumsAC = (allNumberObj:NumbersType) => ({type: 'GET-NUMS', allNumberObj} as const);
export const onClickRestAC = (): OnClickRestAT => ({type: 'REST'});
export const onClickSetAC = (): onClickSetAT => ({type: 'SET'});
export const setErrorAC = (titleError: string | null): setErrorAT => ({type: 'ERROR', titleError});
export const setMessageAC = (titleMessage: string | null): setMessageAT => ({type: 'MESSAGE', titleMessage});


// export const onClickIncTC = (num: number): AppThunk => (dispatch) => {
//
//     dispatch(onClickIncAC());
//     localStorage.setItem('num', JSON.stringify(num + 1));
// };
// export const onClickRestTC = (minNum: number): AppThunk => (dispatch) => {
//     dispatch(onClickRestAC());
//     localStorage.setItem('num', JSON.stringify(minNum));
// };
// export const onClickSetTC = (): AppThunk => (dispatch, getState) => {
//     let {
//         maxNumForSettings,
//         minNumForSettings
//     } = getState().counter.numbers;
//
//     localStorage.setItem('num', JSON.stringify(minNumForSettings));
//     localStorage.setItem('maxNum', JSON.stringify(maxNumForSettings));
//     localStorage.setItem('minNum', JSON.stringify(minNumForSettings));
//     localStorage.setItem('maxNumForSettings', JSON.stringify(maxNumForSettings));
//     localStorage.setItem('minNumForSettings', JSON.stringify(minNumForSettings));
//
//     dispatch(onClickSetAC());
// };
// export const getNumsTC= (): AppThunk => (dispatch, getState) => {
//         let localNum = localStorage.getItem('num');
//         let localMaxNum = localStorage.getItem('maxNum');
//         let localMinNum = localStorage.getItem('minNum');
//         let localMaxNumForSettings = localStorage.getItem('maxNumForSettings');
//         let localMinNumForSettings = localStorage.getItem('minNumForSettings');
//         if (localNum && localMaxNum && localMinNum && localMinNumForSettings && localMaxNumForSettings) {
//             let numsObj= {
//                 num: JSON.parse(localNum),
//                 maxNum: JSON.parse(localMaxNum),
//                 minNum: JSON.parse(localMinNum),
//                 maxNumForSettings: JSON.parse(localMaxNumForSettings),
//                 minNumForSettings: JSON.parse(localMinNumForSettings),
//             }
//             dispatch(getNumsAC(numsObj));
//         }
// };
