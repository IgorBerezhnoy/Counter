import React, {ChangeEvent, useCallback, useState} from 'react';
import s from '../counter.module.css';
import {useDispatch} from 'react-redux';
import {
    onChangeInputHandlerMaxAC,
    OnChangeInputHandlerMaxAT, onChangeInputHandlerMinAC,
    setErrorAC,
    setMessageAC
} from '../../../Reducers/CountReduser/CountReducer';

type PropsType = {
    name: string
    className: string
    number: number
    conditionNumber: number
    error:string|null
}


export const SuperInput = React.memo( (props: PropsType) => {


    const dispatch=useDispatch()

    const onChangeInputHandler =useCallback( (e: ChangeEvent<HTMLInputElement>) => {
        // props.setNumber(Number(e.currentTarget.value));
        (props.name === 'max value:')?dispatch(onChangeInputHandlerMaxAC(Number(e.currentTarget.value))):dispatch(onChangeInputHandlerMinAC(Number(e.currentTarget.value)))
        const condition = props.name === 'max value:'

        if (condition ? +e.currentTarget.value <= props.conditionNumber || Number(e.currentTarget.value) < 0
            : +e.currentTarget.value >= props.conditionNumber || Number(e.currentTarget.value) < 0) {
            dispatch(setErrorAC('Incorrect value!'))

        } else {
            dispatch(setErrorAC(null))
            dispatch(setMessageAC('event values and press \'set\''))

        }
    },[props.conditionNumber,+props.name])

    return (
        <div>
            <span>{props.name}</span> <span>
            <input className={props.error? s.errorInput:s.SuperInput} value={props.number.toString()} type={'number'}
                   onChange={onChangeInputHandler}/>
        </span>
        </div>
    );
})

