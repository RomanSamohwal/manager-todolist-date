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
    type DayCurrentType = typeof dayStartMonthWeek


    let [dayCurrent, setDayCurrent] = useState<DayCurrentType>(dayStartMonthWeek.clone())
    let [monthCurrent, setMonthCurrent] = useState<DayCurrentType>(monthStart.clone())
    let [weekCurrent, setWeekCurrent] = useState<DayCurrentType>(weekStart.clone())

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
                monthCurrent={monthCurrent}
                weekCurrent={weekCurrent}
            />
            <ContentComponent
                day={dayCurrent}
                month={monthCurrent}
                week={weekCurrent}
            />
        </HashRouter>
    </div>
}