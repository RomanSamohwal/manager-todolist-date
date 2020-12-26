import React from 'react';
import './Select.css'
import {ButtonComponent} from '../button/Button';

type PropsType = {
    onChangeFlag: (flag: boolean) => void
    flag: boolean
    onPrevHandler: () => void
    onNextHandler: () => void
    currentMonth: any
}

export const SelectComponent = (props: PropsType) => {
    return <div className='panel-selected'>
        <ButtonComponent name={'<'} onHandle={props.onPrevHandler}/>
        <div onClick={() => {
            props.onChangeFlag(!props.flag)
        }}>{props.currentMonth.format('M')}-{props.currentMonth.format('Y')}</div>
        <ButtonComponent name={'>'} onHandle={props.onNextHandler}/>
    </div>
}