
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
export type OnChangeInputHandlerMinAT = {type:"CHANGEINPUTMIN", value:number}
export type OnChangeInputHandlerMaxAT = {type:"CHANGEINPUTMAX", value:number}


type ActionType = OnClickIncAT | OnClickRestAT | onClickSetAT | setErrorAT | setMessageAT|OnChangeInputHandlerMinAT|OnChangeInputHandlerMaxAT

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
export const CountReducer = (state: StateType = initialState, action: ActionType) => {
    switch (action.type) {
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
        case "ERROR":
            return {...state,messages:{...state.messages,error:action.titleError}}
        case "MESSAGE":
            return {...state,messages:{...state.messages,message:action.titleMessage}}
        case "CHANGEINPUTMAX":
            return {...state,numbers:{...state.numbers,maxNumForSettings:action.value}}
        case "CHANGEINPUTMIN":
            return {...state,numbers:{...state.numbers,minNumForSettings:action.value}}
        default:
            return state
    }
    ;
};
export const onChangeInputHandlerMaxAC =(value:number):OnChangeInputHandlerMaxAT=>({type:"CHANGEINPUTMAX", value})
export const onChangeInputHandlerMinAC =(value:number):OnChangeInputHandlerMinAT=>({type:"CHANGEINPUTMIN", value})
export const onClickIncAC = (): OnClickIncAT => ({type: 'INC'});
export const onClickRestAC = (): OnClickRestAT => ({type: 'REST'});
export const onClickSetAC = (): onClickSetAT => ({type: 'SET'});
export const setErrorAC = (titleError: string | null): setErrorAT => ({type: 'ERROR', titleError});
export const setMessageAC = (titleMessage: string | null): setMessageAT => ({type: 'MESSAGE', titleMessage});
