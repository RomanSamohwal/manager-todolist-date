import React from 'react';
import './Event.css'

type PropsType = {
    text: string
    height: number
    top: number
}

export const Event: React.FC<PropsType> = (props) => {
    return <div style={{
        height: `${props.height}%`,
        position: 'absolute',
        top: `${props.top}%`,
        left: '5px'
    }}
                className='event-container'>
        <div>{props.text}</div>
    </div>
}