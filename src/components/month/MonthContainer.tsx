import React, {useEffect, useState} from 'react';
import moment from 'moment';
import {Month} from './Month';
export const MonthContainer = () => {

    moment.updateLocale('ru', {week: {dow: 1}})
    const dayStart = moment().startOf('month').startOf('week')
    const monthStart = moment().startOf('month')
    type DayCurrentType = typeof dayStart

    let [dayCurrent, setDayCurrent] = useState<DayCurrentType>(dayStart)
    let [currentMonth, setCurrentMonth] = useState<DayCurrentType>(monthStart)

    useEffect(() => {
    }, [])

    const setPrevMonth = () => {
        let month = currentMonth.subtract(1, 'month').clone()
        setDayCurrent(month.startOf('week'))
    }

    const setNextMonth = () => {
        let month = currentMonth.add(1, 'month').clone()
        setDayCurrent(month.startOf('week'))
    }

    return <div>
        <button onClick={() => setPrevMonth()}>{'<'}</button>
        {currentMonth.format('M')}-{currentMonth.format('Y')}
        <button onClick={() => setNextMonth()}>{'>'}</button>
        <Month dayCurrent={dayCurrent} month={currentMonth.clone()}/>
    </div>
}


