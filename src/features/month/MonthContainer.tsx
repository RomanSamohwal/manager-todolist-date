import React from 'react';
import {Month} from './Month';
import './Month.css'

export const MonthContainer = (props: any) => {

    let dayCurrent = props.day
    let currentMonth = props.month

    return <div>
        <Month
            daysObjectArray = {props.daysObjectArray}
            dayCurrent={dayCurrent}
            month={currentMonth.clone()}
            events = {props.events}/>
    </div>
}

