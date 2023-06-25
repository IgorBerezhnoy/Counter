import React, {useState} from 'react';
import {Button} from './Button/Button';
import {Desk} from './Desk/Desk';
import s from './counter.module.css';
import {SuperInput} from './SuperInput/SuperInput';

export const Counter = () => {
    let [num, setNum] = useState(0);
    let [maxNum, setMaxNum] = useState(5);
    let [minNum, setMinNum] = useState(0);

    let [maxNumForSettings, setMaxNumForSettings] = useState(maxNum);
    let [minNumForSettings, setMinNumForSettings] = useState(minNum);

    let [message, setMessage] = useState<string | null>(null);
    let [error, setError] = useState<string | null>(null);

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

    const onClickSet = () => {
        setMessage(null);
         if (maxNumForSettings > minNumForSettings && minNumForSettings > -1) {
            setMaxNum(maxNumForSettings);
            setMinNum(minNumForSettings);
            setNum(minNumForSettings);
            setError(null)
         }
    };
    // const onChangeInput=()=>{
    //     if (maxNumForSettings > minNumForSettings && minNumForSettings > -1){
    //
    //     }
    // }
//
    return (
        <div className={s.wrapper}>
            <div className={s.settings}>
                <div className={s.topTable}>
                    <SuperInput name={'max value:'} number={maxNumForSettings}
                                conditionNumber={minNumForSettings}
                                setNumber={setMaxNumForSettings}
                                className={s.SuperInput} setMessage={setMessage} setError={setError} error={error}/>
                    <SuperInput name={'start value:'}
                                conditionNumber={maxNumForSettings}
                                number={minNumForSettings} setNumber={setMinNumForSettings}
                                className={s.SuperInput} setMessage={setMessage} setError={setError} error={error} />
                </div>
                <div className={s.buttons}>
                    <Button name={'set'} callBack={onClickSet} className={s.button} disabled={!!error}/>
                </div>
            </div>

            <div className={s.counter}>
                <div className={s.desk}>
                    <Desk num={error ? error : message ? message : num}
                          className={error ? s.error : message ? s.message : num == maxNum ? s.deskMaxNum : ''}/>
                </div>
                <div className={s.buttons}>
                    <Button name={'inc'} callBack={onClickInc} disabled={num === maxNum} className={s.button}/>
                    <Button name={'reset'} callBack={onClickRest} disabled={num === minNum} className={s.button}/>
                </div>
            </div>
        </div>);
};

