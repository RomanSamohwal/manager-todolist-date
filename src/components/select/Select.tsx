import React from 'react';
import './Select.css'
import {ButtonComponent} from '../button/Button';

type PropsType = {
    onChangeFlag: (flag: boolean) => void
    flag: boolean
}

export const SelectComponent = (props: PropsType) => {
    return <div className='panel-selected'>
        <ButtonComponent name={'<'} onHandle={() => {
        }}/>
        <div onClick={() => {
            props.onChangeFlag(!props.flag)
        }}>{'.......'}</div>
        <ButtonComponent name={'>'} onHandle={() => {
        }}/>
    </div>
}