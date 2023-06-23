import React, {useState} from 'react';
import {Button} from './Button/Button';
import {Desk} from './Desk/Desk';
import s from './counter.module.css';
import {SuperInput} from './SuperInput/SuperInput';

export const Counter = () => {
    let [num, setNum] = useState(0);
    let [maxNum, setMaxNum]  =useState( 5);
    let [minNum, setMinNum]  =useState( 0);


    const onClickInc = () => {
        if (num < maxNum) {
            setNum(num + 1);
        }
    };
    const onClickRest = () => {
        if (num > minNum) {
            setNum(minNum);
        }
    };

    const onClickSet=()=>{
        if (minNum!>=maxNum){

        }
    }

    const isError = minNum >= maxNum

    return (
        <div className={s.wrapper}>
            <div className={s.settings}>
                <div className={s.topTable}>
                    <SuperInput name={'max value:'} number={maxNum} setNumber={setMaxNum}  className={s.SuperInput}/>
                    <SuperInput name={'start value:'}  number={minNum} setNumber={setMinNum} className={s.SuperInput}/>
                </div>
                <div className={s.buttons}>
                    <Button name={'set'} callBack={onClickSet} className={s.button} disabled={false}/>
                </div>
            </div>

            <div className={s.counter}>
                <div className={s.desk}>
                    <Desk num={num} className={num == maxNum ? s.deskMaxNum : ''}/>
                </div>
                <div className={s.buttons}>
                    <Button name={'inc'} callBack={onClickInc} disabled={num === maxNum} className={s.button}/>
                    <Button name={'reset'} callBack={onClickRest} disabled={num === minNum} className={s.button}/>
                </div>
            </div>
        </div>);
};

