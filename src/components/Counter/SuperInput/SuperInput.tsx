import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    name: string
    className: string
    number:number
    setNumber:(num:number)=>void
}


export const SuperInput = (props: PropsType) => {


    const onChangeInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
      props.setNumber(Number(e.currentTarget.value))
    }

    return (
        <div>
            <span>{props.name}</span> <span>
            <input className={props.className}  value={props.number.toString()} type={'number'} onChange={onChangeInputHandler}/>
        </span>
        </div>
    );
};

