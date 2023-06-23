import React from 'react';
type PropsType={
    num:number
    className:string
}

export const Desk = (props:PropsType) => {
    return (
        <div className={props.className}>
            {props.num}
        </div>
    );
};

