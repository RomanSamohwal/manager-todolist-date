import React from 'react';
import {Button} from '../button/Button';
import './Select.css'

type PropsType = {
    onChangeFlag: (flag: boolean) => void
    flag: boolean
}

export const SelectComponent = (props: PropsType) => {
    return <div>
        <div className='panel-selected'>
            <Button direction={'<'}/>
            <div onClick={() => {
                props.onChangeFlag(!props.flag)
            }}>{'.......'}</div>
            <Button direction={'>'}/>
        </div>
    </div>
}