import React from 'react';
import './Event.css'

type PropsType = {
    text: string
    height: number
    top: number
    left: number
}

export const Event: React.FC<PropsType> = (props) => {
    return <div style={{
        fontSize: '10px',
        height: `${props.height}%`,
        position: 'absolute',
        top: `${props.top}%`,
        left: `${props.left}%`
    }}
                className='event-container'>
        <div>{props.text}</div>
    </div>
}