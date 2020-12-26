import React, {useState} from 'react';
import './Week.css'
import {Week} from './Week';

export const WeekContainer = (props: any) => {

    const dayStartWeek = props.week.clone().subtract(1, 'day')
    const currentWeekArray = [...Array(7)].map(() => dayStartWeek.add(1, 'day').clone())

    return <Week currentWeekArray={currentWeekArray} month = {props.month}/>
}