import React, {useEffect} from 'react';
import {Month} from './Month';
import './Month.css'
import {useAppDispatch} from '../../bll/store';
import {switchCalendar} from '../../bll/app-reducer';


export const MonthContainer = (props: any) => {

    let dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(switchCalendar({choice: 'month'}))
    }, [])

    let dayCurrent = props.day
    let currentMonth = props.month

    return <div>
        <Month
            daysObjectArray={props.daysObjectArray}
            dayCurrent={dayCurrent}
            month={currentMonth.clone()}
            events={props.events}/>
    </div>
}

