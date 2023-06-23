import React, {useState} from 'react';
import {Button} from './Button/Button';
import {Desk} from './Desk/Desk';
import s from './counter.module.css';

export const Counter = () => {
    let [num, setNum] = useState(0);
    const minNum=0
    const maxNum=5

    const onClickInc=()=>{
        if (num<5){
            setNum(num+1)
        }
    }
    const onClickRest=()=>{
        if (num>=1){
            setNum(minNum)
        }
    }


    return (
        <div className={s.counter}>
            <div className={s.desk}>
                <Desk num={num} className={num==maxNum?s.deskMaxNum:""}/>
            </div>
            <div className={s.buttons} >
                <Button name={"inc"} callBack={onClickInc} disabled={num===maxNum} className={s.button} />
                <Button name={"reset"} callBack={onClickRest} disabled={num===minNum} className={s.button}/>
            </div>
        </div>
    );
};

