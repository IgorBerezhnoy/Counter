import React, {useEffect, useState} from 'react';
import s from './routerCounter.module.css';
import {CounterForRout} from './CounterForRout';
import {SettingsForRouter} from './SettingsForRouter';
import {Navigate, Route, Routes} from 'react-router-dom';

export const RouterCounter = () => {
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
            setError(null);
        }
    };

    useEffect(() => {
        debugger
        let localNum = localStorage.getItem('RouteNum');
        let localMaxNum = localStorage.getItem('RouteMaxNum');
        let localMinNum = localStorage.getItem('RouteMinNum');
        let localMaxNumForSettings = localStorage.getItem('RouteMaxNumForSettings');
        let localMinNumForSettings = localStorage.getItem('RouteMinNumForSettings');
        if (localNum && localMaxNum && localMinNum && localMinNumForSettings && localMaxNumForSettings) {
            setNum(JSON.parse(localNum));
            setMinNum(JSON.parse(localMinNum));
            setMaxNum(JSON.parse(localMaxNum));
            setMaxNumForSettings(JSON.parse(localMaxNumForSettings));
            setMinNumForSettings(JSON.parse(localMinNumForSettings));
        }
    }, []);


    useEffect(() => {
        localStorage.setItem('RouteNum', JSON.stringify(num));
        localStorage.setItem('RouteMaxNum', JSON.stringify(maxNum));
        localStorage.setItem('RouteMinNum', JSON.stringify(minNum));
        localStorage.setItem('RouteMaxNumForSettings', JSON.stringify(maxNumForSettings));
        localStorage.setItem('RouteMinNumForSettings', JSON.stringify(minNumForSettings));
    }, [num, maxNum, minNum]);



    return (
        <div className={s.wrapper}>
            <Routes>
                {/*          <Route path={'/'} element={<Navigate to={"/pre-junior"}/>}/>*/}
                <Route path={"/"}  element={<Navigate to={"/counter"}/>}/>
               <Route path={"/settings"} element={ <SettingsForRouter maxNumForSettings={maxNumForSettings} minNumForSettings={minNumForSettings}
                                                                     setMaxNumForSettings={setMaxNumForSettings}
                                                                     setMinNumForSettings={setMinNumForSettings}
                                                                     setMessage={setMessage} setError={setError} onClickSet={onClickSet} error={error}/>}/>


              {/*//<Route path={ "/pre-junior"} element={<PreJunior/>}/>*/}
                <Route path={"/counter"} element={<CounterForRout error={error} message={message} num={num} maxNum={maxNum} onClickInc={onClickInc}
                                                                  onClickRest={onClickRest} onClickSet={onClickSet} minNum={minNum}/>}/>
            </Routes>
        </div>);
};

