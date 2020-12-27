import React, {useState} from 'react';
import {HeaderComponent} from './header/HeaderComponent';
import {HashRouter} from 'react-router-dom';
import {ContentComponent} from './content/ContentComponent';
import moment from 'moment';

export const Main = () => {

    moment.updateLocale('ru', {week: {dow: 1}})


    const dayStart = moment()

    const dayOfBeginOfMonthOfWeek = moment().startOf('month').startOf('week')
    const weekStart = moment().startOf('week')

    const monthStart = moment().startOf('month')
    type DayCurrentType = typeof dayOfBeginOfMonthOfWeek

    let [dayCurrent, setDayCurrent] = useState<DayCurrentType>(dayStart.clone())
    let [dayBeginOfMonth, setDayBeginOfMonth] = useState<DayCurrentType>(dayOfBeginOfMonthOfWeek.clone())
    let [monthCurrent, setMonthCurrent] = useState<DayCurrentType>(monthStart.clone())
    let [weekCurrent, setWeekCurrent] = useState<DayCurrentType>(weekStart.clone())

    let setPrevDay = () => {
        let dayPrev = dayCurrent.subtract(1, 'day').clone()
        setDayCurrent(dayPrev)
    }

    let setNextDay = () => {
        let nextDay = dayCurrent.add(1, 'day').clone()
        setDayCurrent(nextDay)
    }


    let setPrevWeek = () => {
        let weekPrevStart = weekCurrent.subtract(1, 'week').clone()
        setWeekCurrent(weekPrevStart)
    }

    let setNextWeek = () => {
        let weekNextStart = weekCurrent.add(1, 'week').clone()
        setWeekCurrent(weekNextStart)
    }

    let setPrevMonth = () => {
        let month = monthCurrent.subtract(1, 'month').clone()
        setDayBeginOfMonth(month.startOf('week'))
    }

    const setNextMonth = () => {
        let month = monthCurrent.add(1, 'month').clone()
        setDayBeginOfMonth(month.startOf('week'))
    }


    return <div>
        <HashRouter>
            <HeaderComponent
                setPrevDay = {setPrevDay}
                setNextDay = {setNextDay}
                setPrevMonth={setPrevMonth}
                setNextMonth={setNextMonth}
                setPrevWeek={setPrevWeek}
                setNextWeek={setNextWeek}
                dayCurrent = {dayCurrent}
                monthCurrent={monthCurrent}
                weekCurrent={weekCurrent}
            />
            <ContentComponent
                day={dayBeginOfMonth}
                month={monthCurrent}
                week={weekCurrent}
            />
        </HashRouter>
    </div>
}