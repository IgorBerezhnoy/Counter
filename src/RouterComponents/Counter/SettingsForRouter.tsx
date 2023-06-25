import React from 'react';
import {SuperInput} from './SuperInput/SuperInput';
import {Button} from './Button/Button';
import s from "./routerCounter.module.css"
import {NavLink} from 'react-router-dom';

type PropsType={
    maxNumForSettings:number
    minNumForSettings:number
    setMaxNumForSettings:(num:number)=>void
    setMinNumForSettings:(num:number)=>void
    setMessage:(value: string | null) => void
    setError:(value: string | null) => void
    onClickSet:()=>void
    error:string | null

}
export const SettingsForRouter = (props:PropsType) => {
    return (
        <div className={s.settings}>
            <div className={s.topTable}>
                <SuperInput name={'max value:'} number={props.maxNumForSettings}
                            conditionNumber={props.minNumForSettings}
                            setNumber={props.setMaxNumForSettings}
                            className={s.SuperInput} setMessage={props.setMessage} setError={props.setError} error={props.error}/>
                <SuperInput name={'start value:'}
                            conditionNumber={props.maxNumForSettings}
                            number={props.minNumForSettings} setNumber={props.setMinNumForSettings}
                            className={s.SuperInput} setMessage={props.setMessage} setError={props.setError} error={props.error} />
            </div>
            <div className={s.buttons}>
                <NavLink to={"/"}><Button name={'set'} callBack={props.onClickSet} className={s.button} disabled={!!props.error}/></NavLink>
            </div>
        </div>
    );
};

