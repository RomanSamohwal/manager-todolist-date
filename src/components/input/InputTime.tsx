import React, {ChangeEvent} from 'react';
import './Input.css'

export const InputTime = () => {

    let onHandlerHour = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
    }

    let onHandlerMinute = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
    }

    return <div className='wrapper-input'>
        <input type="number" min="0" max="23" placeholder="00" onChange={onHandlerHour}/>
        <input type="number" min="0" max="59" placeholder="00" onChange={onHandlerMinute}/>
    </div>
}