import React, {useEffect} from 'react';
import {Button} from './Button/Button';
import {Desk} from './Desk/Desk';
import s from './counter.module.css';
import {SuperInput} from './SuperInput/SuperInput';
import {useDispatch, useSelector} from 'react-redux';
import {RootAppReducersType, ThunkType} from '../../StoreCount/StoreCount';


import {
    getNumsTC,
    MessagesType,
    NumbersType,
    onClickIncAC, onClickIncTC,
    onClickRestAC, onClickRestTC,
    onClickSetAC, onClickSetTC
} from '../../Reducers/CountReduser/CountReducer';

export const Counter = () => {

useEffect(()=>{
    debugger
    dispatch(getNumsTC())
},[])
    const counter = useSelector<RootAppReducersType, NumbersType>(state => state.counter.numbers);
    const messages = useSelector<RootAppReducersType, MessagesType>(state => state.counter.messages);

    const dispatch = useDispatch<ThunkType>();

    let {
        num,
        maxNum,
        minNum,
        maxNumForSettings,
        minNumForSettings
    } = counter;
    let {error, message} = messages;


    const onClickInc = () => {
        if (num < maxNum) {
            dispatch(onClickIncTC(num));

        }
    };
    const onClickRest = () => {
        if (num > minNum) {
            dispatch(onClickRestTC(minNum));
        }

    };

    const onClickSet = () => {
        if (maxNumForSettings > minNumForSettings && minNumForSettings > -1) {
            dispatch(onClickSetTC());
        }
    };


    // useEffect(() => {
    //     debugger
    //     let localNum = localStorage.getItem('RouteNum');
    //     let localMaxNum = localStorage.getItem('RouteMaxNum');
    //     let localMinNum = localStorage.getItem('RouteMinNum');
    //     let localMaxNumForSettings = localStorage.getItem('RouteMaxNumForSettings');
    //     let localMinNumForSettings = localStorage.getItem('RouteMinNumForSettings');
    //     if (localNum && localMaxNum && localMinNum && localMinNumForSettings && localMaxNumForSettings) {
    //         setNum(JSON.parse(localNum));
    //         setMinNum(JSON.parse(localMinNum));
    //         setMaxNum(JSON.parse(localMaxNum));
    //         setMaxNumForSettings(JSON.parse(localMaxNumForSettings));
    //         setMinNumForSettings(JSON.parse(localMinNumForSettings));
    //     }
    // }, []);
    //
    //
    // useEffect(() => {
    //     localStorage.setItem('RouteNum', JSON.stringify(num));
    //     localStorage.setItem('RouteMaxNum', JSON.stringify(maxNum));
    //     localStorage.setItem('RouteMinNum', JSON.stringify(minNum));
    //     localStorage.setItem('RouteMaxNumForSettings', JSON.stringify(maxNumForSettings));
    //     localStorage.setItem('RouteMinNumForSettings', JSON.stringify(minNumForSettings));
    // }, [num, maxNum, minNum]);


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
                    <Button name={'inc'} callBack={onClickInc} disabled={num === maxNum||!!message||!!error} className={s.button}/>
                    <Button name={'reset'} callBack={onClickRest} disabled={num === minNum||!!message||!!error} className={s.button}/>
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
