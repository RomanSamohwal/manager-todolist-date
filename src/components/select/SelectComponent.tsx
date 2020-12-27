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
}

export const SelectComponent = (props: PropsType) => {
    const MONTH = ['January', 'February', 'March', 'April', 'May',
        'June', 'July', 'August', 'September','October', 'November', 'December'];
    //props.monthCurrent.format('M')}-{props.monthCurrent.format('Y')
     console.log(props.weekCurrent)

    let startWeek = props.weekCurrent.clone()
    let endWeek = props.weekCurrent.clone().endOf('week')
     console.log(props.weekCurrent.format('D'))

    let day = props.dayCurrent
    /* console.log(props.weekCurrent.endOf('week'))*/

/*    {startWeek.format('D')} { MONTH[startWeek.format('M')-1]} {startWeek.format('Y')}
    -
        {endWeek.format('D')} { MONTH[endWeek.format('M')-1]} {endWeek.format('Y')}*/
    return <div className='panel-selected'>
        <ButtonComponent name={'<'} onHandle={props.onPrevHandler}/>
        <div onClick={() => {
            props.onChangeFlag(!props.flag)
        }}>{day.format('D')} {MONTH[day.format('M')-1]} {day.format('Y')}</div>
        <ButtonComponent name={'>'} onHandle={props.onNextHandler}/>
    </div>
}