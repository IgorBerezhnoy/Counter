import React from 'react';
import s from '../routerCounter.module.css';

type PropsType={
    name:string
    callBack:()=>void
    className:string
    disabled:boolean
}

export const Button = (props:PropsType) => {
    const onClickHandler=()=>{
        props.callBack()
    }
    return (
        <button className={props.className} disabled={props.disabled} onClick={onClickHandler}>
            {props.name}
        </button>
    );
};

