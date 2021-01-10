import React from 'react';
import './Select.css'
import {ButtonComponent} from '../button/Button';

type PropsType = {
    onChangeFlag: (flag: boolean) => void
    flag: boolean
    onPrevHandler: () => void
    onNextHandler: () => void
    monthCurrent: any
    weekCurrent: any
    dayCurrent: any
    calendarSwitch: any
}

export const SelectComponent = (props: PropsType) => {
    const MONTH = ['January', 'February', 'March', 'April', 'May',
        'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    debugger
    let startWeek = props.weekCurrent.clone()
    let endWeek = props.weekCurrent.clone().endOf('week')
    let day = props.dayCurrent.clone()
    let month = props.monthCurrent.clone()

    let selectedCalendar

    switch (props.calendarSwitch) {
        case 'week':
            selectedCalendar =
                <>{startWeek.format('D')} {MONTH[startWeek.format('M') - 1]} {startWeek.format('Y')} -
                    {endWeek.format('D')} {MONTH[endWeek.format('M') - 1]} {endWeek.format('Y')}</>
            break;
        case 'day':
            selectedCalendar = <>{day.format('D')} {MONTH[day.format('M') - 1]} {day.format('Y')}</>
            break;
        default: {
            selectedCalendar = <>{MONTH[month.format('M') - 1]}-{month.format('Y')}</>
        }
    }

    return <div className='panel-selected'>
        <ButtonComponent name={'<'} onHandle={props.onPrevHandler}/>
        <div onClick={() => {
            props.onChangeFlag(!props.flag)
        }}>{selectedCalendar}</div>
        <ButtonComponent name={'>'} onHandle={props.onNextHandler}/>
    </div>
}