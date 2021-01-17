import React, {useEffect} from 'react';
import {Month} from './Month';
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
            dayCurrent={dayCurrent}
            month={currentMonth.clone()}
        />
    </div>
}

