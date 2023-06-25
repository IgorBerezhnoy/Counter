import React, {ChangeEvent, useState} from 'react';
import s from '../routerCounter.module.css';

type PropsType = {
    name: string
    className: string
    number: number
    setNumber: (num: number) => void
    setMessage: (value: string | null) => void
    setError: (value: string | null) => void
    conditionNumber: number
    error:string|null
}


export const SuperInput = (props: PropsType) => {


    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setNumber(Number(e.currentTarget.value));
        //;
        const condition = props.name === 'max value:';

        if (condition ? +e.currentTarget.value <= props.conditionNumber || Number(e.currentTarget.value) < 0
            : +e.currentTarget.value >= props.conditionNumber || Number(e.currentTarget.value) < 0) {
            props.setError('Incorrect value!');
        } else {
            props.setError(null);
            props.setMessage('event values and press \'set\'');

        }
    };

    return (
        <div>
            <span>{props.name}</span> <span>
            <input className={props.error? s.errorInput:s.SuperInput} value={props.number.toString()} type={'number'}
                   onChange={onChangeInputHandler}/>
        </span>
        </div>
    );
};

