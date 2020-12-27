import React, {useState} from 'react';
import {SelectWindow} from '../select-window/SelectWindow';
import {SelectComponent} from './SelectComponent';

export const SelectContainer = (props: any) => {
    let [show, setShow] = useState<boolean>(false)
    let onShowHandler = (flag: boolean) => {
        setShow(flag)
    }




    const onPrevHandler = () => {
        /*props.setPrevMonth()*/
        props.setPrevWeek()
    }

    const onNextHandler = () => {
       /* props.setNextMonth()*/
        props.setNextWeek()
    }

    return <div style={{position: 'relative'}}>
        <SelectComponent flag={show} onChangeFlag={onShowHandler}
                         onPrevHandler={onPrevHandler}
                         onNextHandler={onNextHandler}
                         monthCurrent={props.monthCurrent}
                         weekCurrent = {props.weekCurrent}
        />
        {show && <SelectWindow/>}
    </div>
}