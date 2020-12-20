import React from 'react';
import './Event.css'

type PropsType = {
    text: string
    height: number
    top: number
    fault: number
}

export const Event: React.FC<PropsType> = (props) => {
    return <div style={{
        height: `${props.height + props.fault}%`,
        position: 'absolute',
        top: `${props.top}%`
    }}
                className='event-container'>
        <div>{props.text}</div>
    </div>
}