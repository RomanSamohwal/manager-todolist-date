import React from 'react';
import {Month} from './Month';
import './Month.css'

export const MonthContainer = (props: any) => {


    let dayCurrent = props.day
    let currentMonth = props.month

    return <div>
        <Month dayCurrent={dayCurrent} month={currentMonth.clone()}/>
    </div>
}

