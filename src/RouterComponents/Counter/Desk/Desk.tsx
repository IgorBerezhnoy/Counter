import React from 'react';
type PropsType={
    num:number|string
    className:string
}

export const Desk = (props:PropsType) => {
    return (
        <div className={props.className}>
            {props.num}
        </div>
    );
};

