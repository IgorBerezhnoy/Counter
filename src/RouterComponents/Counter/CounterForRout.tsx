import React from 'react';
import {Desk} from './Desk/Desk';
import {Button} from './Button/Button';
import s from './routerCounter.module.css';
import {Navigate, NavLink} from 'react-router-dom';

type PropsType ={
    error:string | null
    message:string | null
    num:number
    maxNum:number
    onClickInc:()=>void
    onClickRest:()=>void
    onClickSet:()=>void
    minNum:number
}

export const CounterForRout = (props:PropsType) => {
    return (
        <div>
            <div className={s.counter}>
                <div className={s.desk}>
                    <Desk num={props.error ? props.error : props.message ? props.message : props.num}
                          className={props.error ? s.error : props.message ? s.message : props.num == props.maxNum ? s.deskMaxNum : ''}/>
                </div>
                <div className={s.buttons}>
                    <Button name={'inc'} callBack={props.onClickInc} disabled={props.num === props.maxNum} className={s.button}/>
                    <Button name={'reset'} callBack={props.onClickRest} disabled={props.num === props.minNum} className={s.button}/>
                    <NavLink to={"/settings"}><Button name={'set'} callBack={()=>{}} className={s.button} disabled={false}/></NavLink>
                </div>
            </div>
        </div>
    );
};

