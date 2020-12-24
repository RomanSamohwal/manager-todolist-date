import React, {useState} from 'react';
import {SelectComponent} from './Select';
import {SelectWindow} from '../select-window/SelectWindow';

export const SelectContainer = () => {
    let [show, setShow] = useState<boolean>(false)

    let onShowHandler = (flag: boolean) => {
        setShow(flag)
    }

    return <div style={{position: 'relative'}}>
        <SelectComponent flag={show} onChangeFlag={onShowHandler}/>
        {show && <SelectWindow/>}
    </div>
}