import React, {useEffect} from 'react';
import {Day} from './Day';
import {useAppDispatch} from '../../bll/store';
import {switchCalendar} from '../../bll/app-reducer';

export const DayContainer = (props: any) => {
    let dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(switchCalendar({choice: 'day'}))
    }, [])

    return <Day dayCurrent = {props.dayCurrent}/>
}