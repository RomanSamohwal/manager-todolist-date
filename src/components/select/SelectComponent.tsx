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
}

export const SelectComponent = (props: PropsType) => {

    //props.monthCurrent.format('M')}-{props.monthCurrent.format('Y')
     console.log(props.weekCurrent)

    let startWeek = props.weekCurrent.clone()
    let endWeek = props.weekCurrent.clone().endOf('week')
     console.log(props.weekCurrent.format('D'))

    /* console.log(props.weekCurrent.endOf('week'))*/

    return <div className='panel-selected'>
        <ButtonComponent name={'<'} onHandle={props.onPrevHandler}/>
        <div onClick={() => {
            props.onChangeFlag(!props.flag)
        }}>{startWeek.format('D')}-{startWeek.format('M')}-{startWeek.format('Y')}
            --
            {endWeek.format('D')}-{endWeek.format('M')}-{endWeek.format('Y')}
        </div>
        <ButtonComponent name={'>'} onHandle={props.onNextHandler}/>
    </div>
}