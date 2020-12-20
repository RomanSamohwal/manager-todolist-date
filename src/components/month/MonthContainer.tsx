import React, {useState} from 'react';
import moment from 'moment';
import {Month} from './Month';
import './Month.css'
import {MonthSelected} from '../month_selected/MonthSelected';

export const MonthContainer = () => {

    moment.updateLocale('ru', {week: {dow: 1}})
    const dayStart = moment().startOf('month').startOf('week')
    const monthStart = moment().startOf('month')
    type DayCurrentType = typeof dayStart

    let [dayCurrent, setDayCurrent] = useState<DayCurrentType>(dayStart)
    let [currentMonth, setCurrentMonth] = useState<DayCurrentType>(monthStart)
    let [flag, setFlag] = useState(false)

    const setPrevMonth = () => {
        let month = currentMonth.subtract(1, 'month').clone()
        setDayCurrent(month.startOf('week'))
    }

    const setNextMonth = () => {
        let month = currentMonth.add(1, 'month').clone()
        setDayCurrent(month.startOf('week'))
    }

    return <div>
        <div className='block_change_months'>
            <div>
                <button onClick={() => setPrevMonth()}>{'<'}</button>
            </div>
            <div onClick={() => setFlag(!flag)}>
                {currentMonth.format('M')}-{currentMonth.format('Y')}
            </div>
            <div>
                <button onClick={() => setNextMonth()}>{'>'}</button>
            </div>
            <div className='block_selected'>
                {flag && <MonthSelected/>}
            </div>
        </div>

        <Month dayCurrent={dayCurrent} month={currentMonth.clone()}/>
    </div>
}


