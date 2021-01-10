import React, {useEffect} from 'react';
import './Week.css'
import {Week} from './Week';
import {useAppDispatch} from '../../bll/store';
import {switchCalendar} from '../../bll/app-reducer';

export const WeekContainer = (props: any) => {
    let dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(switchCalendar({choice: 'week'}))
    }, [])


    const dayStartWeek = props.week.clone().subtract(1, 'day')
    const currentWeekArray = [...Array(7)].map(() => dayStartWeek.add(1, 'day').clone())

    return <Week currentWeekArray={currentWeekArray} month = {props.month}/>
}