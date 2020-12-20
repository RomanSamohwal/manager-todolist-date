import React, {useState} from 'react';
import {Day} from './Day';
import {SelectComponent} from '../select/Select';
import {Event} from '../event/Event';
import { TestPosition } from '../event/Test';

export const DayContainer = () => {
    let [flag, setFlag] = useState(false)
    const onChangeFlag = (flag: boolean) => {
        setFlag(flag)
    }

    return <div className='day-container'>
        <SelectComponent onChangeFlag={onChangeFlag} flag={flag}/>
        <TestPosition/>
        {/*<Day/>*/}
    </div>
}