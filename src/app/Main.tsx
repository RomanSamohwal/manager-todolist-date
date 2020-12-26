import React, {useState} from 'react';
import {HeaderComponent} from './header/HeaderComponent';
import {HashRouter} from 'react-router-dom';
import {ContentComponent} from './content/ContentComponent';
import moment from 'moment';

export const Main = () => {

    moment.updateLocale('ru', {week: {dow: 1}})
    const dayStartMonthWeek = moment().startOf('month').startOf('week')
    const weekStart = moment().startOf('week')
    const monthStart = moment().startOf('month')
    console.log('weekStart')
    console.log(weekStart)

    type DayCurrentType = typeof dayStartMonthWeek


    let [dayCurrent, setDayCurrent] = useState<DayCurrentType>(dayStartMonthWeek)
    let [monthCurrent, setMonthCurrent] = useState<DayCurrentType>(monthStart)
    let [weekCurrent, setWeekCurrent] = useState<DayCurrentType>(weekStart)

    let setPrevWeek = () => {
        let week = weekCurrent.subtract(1, 'week').clone()
        setWeekCurrent(week)
    }

    let setNextWeek = () => {
        let week = weekCurrent.add(1, 'week').clone()
        setWeekCurrent(week)
    }

    let setPrevMonth = () => {
        let month = monthCurrent.subtract(1, 'month').clone()
        setDayCurrent(month.startOf('week'))
    }

    const setNextMonth = () => {
        let month = monthCurrent.add(1, 'month').clone()
        setDayCurrent(month.startOf('week'))
    }


    return <div>
        <HashRouter>
            <HeaderComponent
                setPrevMonth={setPrevMonth}
                setNextMonth={setNextMonth}
                setPrevWeek={setPrevWeek}
                setNextWeek={setNextWeek}
                currentMonth={monthCurrent}/>
            <ContentComponent
                day={dayCurrent}
                month={monthCurrent}
                week={weekCurrent}
            />
        </HashRouter>
    </div>
}