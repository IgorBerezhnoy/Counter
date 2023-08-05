import React from 'react';
import {Button} from './Button/Button';
import {Desk} from './Desk/Desk';
import s from './counter.module.css';
import {SuperInput} from './SuperInput/SuperInput';
import {useDispatch, useSelector} from 'react-redux';
import {RootAppReducersType} from '../../StoreCount/StoreCount';


import {
    MessagesType,
    NumbersType,
    onClickIncAC,
    onClickRestAC,
    onClickSetAC
} from '../../Reducers/CountReduser/CountReducer';

export const Counter = () => {



    const counter=useSelector<RootAppReducersType,NumbersType>(state => state.counter.numbers)
    const messages=useSelector<RootAppReducersType,MessagesType>(state => state.counter.messages)

    const dispatch=useDispatch()

    let {
        num,
        maxNum,
        minNum,
        maxNumForSettings,
        minNumForSettings}=counter
    let {error,message}=messages


    const onClickInc = () => {
        if (num < maxNum) {
         dispatch(onClickIncAC())
        }
    };
    const onClickRest = () => {
        if (num > minNum) {
            dispatch(onClickRestAC())
        }

    };
    //


    const onClickSet = () => {
        if (maxNumForSettings > minNumForSettings && minNumForSettings > -1) {
            dispatch(onClickSetAC())
        }
    };

    return (
        <div className={s.wrapper}>
            <div className={s.settings}>
                <div className={s.topTable}>
                    <SuperInput name={'max value:'} number={maxNumForSettings}
                                conditionNumber={minNumForSettings}
                                className={s.SuperInput} error={error}/>
                    <SuperInput name={'start value:'}
                                conditionNumber={maxNumForSettings}
                                number={minNumForSettings}
                                className={s.SuperInput} error={error}/>
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

    // let [num, setNum] = useState(0);
    // let [maxNum, setMaxNum] = useState(5);
    // let [minNum, setMinNum] = useState(0);
    //
    // let [maxNumForSettings, setMaxNumForSettings] = useState(maxNum);
    // let [minNumForSettings, setMinNumForSettings] = useState(minNum);
    //
    // let [message, setMessage] = useState<string | null>(null);
 // let [error, setError] = useState<string | null>(null);


    // const onChangeInput=()=>{
    //     if (maxNumForSettings > minNumForSettings && minNumForSettings > -1){
    //
    //     }
    // }
