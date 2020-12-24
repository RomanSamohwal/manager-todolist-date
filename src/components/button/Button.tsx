import React from 'react';
import './Button.css'

type ButtonType = {
    name: string
    onHandle: () => void
}

export const Button = (props: ButtonType) => {
    return <div className='button'>
        <button onClick={props.onHandle}>{props.name}</button>
    </div>
}