import React, {useEffect} from 'react';
import {Month} from './Month';
import {AppRootStateType, useAppDispatch} from '../../bll/store';
import {switchCalendar} from '../../bll/app-reducer';
import {useSelector} from 'react-redux';

export const MonthContainer = (props: any) => {

    let dispatch = useAppDispatch()
    let days = useSelector<AppRootStateType>(state => state.days)
    let events = useSelector<AppRootStateType>(state => state.events.events)

    useEffect(() => {
        dispatch(switchCalendar({choice: 'month'}))
    }, [])

    let dayCurrent = props.day
    let currentMonth = props.month

    return <div>
        <Month
            daysObjectArray={days}
            dayCurrent={dayCurrent}
            month={currentMonth.clone()}
            events={events}/>
    </div>
}

