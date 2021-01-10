import React, {useState} from 'react';
import {SelectWindow} from '../select-window/SelectWindow';
import {SelectComponent} from './SelectComponent';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../bll/store';

export const SelectContainer = (props: any) => {
    const calendarSwitch = useSelector<AppRootStateType>(state => state.app.calendarSwitch)
    let [show, setShow] = useState<boolean>(false)
    let onShowHandler = (flag: boolean) => {
        setShow(flag)
    }

    const onPrevHandler = () => {
        switch (calendarSwitch) {
            case 'week': {
                return props.setPrevWeek()
            }
            case 'day': {
                return props.setPrevDay()
            }
            default: {
                return props.setPrevMonth()
            }
        }
    }

    const onNextHandler = () => {
        switch (calendarSwitch) {
            case 'week': {
                return props.setNextWeek()
            }
            case 'day': {
                return props.setNextDay()
            }
            default: {
                return props.setNextMonth()
            }
        }
    }

    return <div style={{position: 'relative'}}>
        <SelectComponent flag={show} onChangeFlag={onShowHandler}
                         onPrevHandler={onPrevHandler}
                         onNextHandler={onNextHandler}
                         monthCurrent={props.monthCurrent}
                         weekCurrent = {props.weekCurrent}
                         dayCurrent = {props.dayCurrent}
                         calendarSwitch = {calendarSwitch}
        />
        {show && <SelectWindow/>}
    </div>
}