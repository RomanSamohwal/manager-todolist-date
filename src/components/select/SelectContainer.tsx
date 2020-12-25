import React, {useState} from 'react';
import {SelectWindow} from '../select-window/SelectWindow';
import {SelectComponent} from './SelectComponent';

export const SelectContainer = () => {
    let [show, setShow] = useState<boolean>(false)
    let onShowHandler = (flag: boolean) => {
        setShow(flag)
    }

    const onPrevHandler = () => {
        alert('prev')
    }

    const onNextHandler = () => {
        alert('next')
    }

    return <div style={{position: 'relative'}}>
        <SelectComponent flag={show} onChangeFlag={onShowHandler}
                         onPrevHandler={onPrevHandler}
                         onNextHandler={onNextHandler}
        />
        {show && <SelectWindow/>}
    </div>
}