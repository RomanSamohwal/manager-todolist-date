import React, {useState} from 'react';
import './Week.css'
import {Week} from './Week';
import {WeekSelect} from './WeekSelect';


export const WeekContainer = () => {
    let [flag, setFlag] = useState(false)

    const onChangeFlag = (flag: boolean) => {
        setFlag(flag)
    }

    return <div className='week-container'>
       {/* <SelectComponent onChangeFlag={onChangeFlag} flag={flag}/>*/}
        {flag && <WeekSelect/>}
        <Week/>
    </div>
}