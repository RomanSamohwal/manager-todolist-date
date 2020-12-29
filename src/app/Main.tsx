import React, {useState} from 'react';
import {HeaderComponent} from './header/HeaderComponent';
import {HashRouter} from 'react-router-dom';
import {ContentComponent} from './content/ContentComponent';
import moment from 'moment';
import {createDay, createEvent} from '../utils/createEvent';

export const Main = () => {

    let Event1 = createEvent(1, 30, 2,
        30, 'meting1', 'meeting with my friend',)

    let Event2 = createEvent(1, 30, 2,
        30, 'meting2', 'meeting with my friend',)

    let DayObject = createDay(29,12,2020)
    let DayObject1 = createDay(1,1,2021)
    let DaysObject = [DayObject,DayObject1]

    let EventsArray = {
        [DayObject.id]: [Event1, Event2,Event2,Event2],
        [DayObject1.id]: [Event1, Event2,Event2,Event1,Event2]

    }

    let [daysObjectArray, setDay] = useState(DaysObject)

    let [events , setEvents] = useState(EventsArray)

    let selectDay = moment().date(1).month('January').year(2021)
    console.log(selectDay)
    moment.updateLocale('ru', {week: {dow: 1}})


    const dayStart = moment()
    console.log(dayStart)

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
                setPrevDay={setPrevDay}
                setNextDay={setNextDay}
                setPrevMonth={setPrevMonth}
                setNextMonth={setNextMonth}
                setPrevWeek={setPrevWeek}
                setNextWeek={setNextWeek}
                dayCurrent={dayCurrent}
                monthCurrent={monthCurrent}
                weekCurrent={weekCurrent}
            />
            <ContentComponent
                daysObjectArray = {daysObjectArray}
                day={dayBeginOfMonth}
                month={monthCurrent}
                week={weekCurrent}
                events = {events}
            />
        </HashRouter>
    </div>
}