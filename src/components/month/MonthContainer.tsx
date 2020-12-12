import React, {useEffect, useState} from 'react';
import moment from 'moment';
import {Month} from './Month';

export const MonthContainer = () => {

    moment.updateLocale('ru', {week: {dow: 1}})
    const dayStart = moment().startOf('month').startOf('week')
    const startMonth = moment().startOf('month')

    type DayCurrentType = typeof dayStart

    console.log(dayStart)
    let [dayCurrent, setDayCurrent] = useState<DayCurrentType>(dayStart)
    let [currentMonth, setCurrentMonth] = useState<DayCurrentType>(dayStart)
    console.log(dayCurrent)

    useEffect(() => {
        setDayCurrent(dayCurrent)
        setCurrentMonth(startMonth)
    }, [])

    const setPrevMonth = () => {
        debugger
        let prevMonth = dayCurrent.subtract(1, 'month').format('M')
        let selectedMonth = moment().month(prevMonth).startOf('month')
        let diffBetweenDay = 6 - (6 - selectedMonth.weekday())
        if(diffBetweenDay === 0){
            diffBetweenDay = 1
        }
        let prevMonthStartWeek = selectedMonth.clone().subtract(diffBetweenDay, 'day')
        /*let prevMonthStartWeek = selectedMonth.startOf('week').clone()*/
        setDayCurrent(prevMonthStartWeek.startOf('week'))
        let month = currentMonth.subtract(1, 'month').clone()
        setCurrentMonth(month)
    }

    const setNextMonth = () => {
        debugger
        let nextMonth = dayCurrent.add(1, 'month').format('M')
        let selectedMonth = moment().month(nextMonth).startOf('month')
        let nextMonthStartWeek = selectedMonth.startOf('week').clone()
        setDayCurrent(nextMonthStartWeek)
        let month = currentMonth.add(1, 'month').clone()
        setCurrentMonth(month)
    }

    return <div>
        <button onClick={() => setPrevMonth()}>{'<'}</button>
        {currentMonth.format('M')}-{currentMonth.format('Y')}
        <button onClick={() => setNextMonth()}>{'>'}</button>
        <Month dayCurrent = {dayCurrent} month = {currentMonth}/>
    </div>
}


