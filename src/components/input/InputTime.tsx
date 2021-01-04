import React, {ChangeEvent, useState} from 'react';
import './Input.css'
import {Input} from 'antd';
import moment from 'moment';
import {InputTimeWrapper} from '../button/styled';
import {FormikInnerBlock} from '../../features/styled/Styled';

export const InputComponent = (props: any) => {

    return <Input id={props.id} name={props.name}
                  type={props.type} onChange={props.onChange}
                  value={props.value} placeholder={props.placeholder}
                  min={props.min} max={props.max}
    />
}

export const InputTime = () => {

    let [hour, setHour] = useState<any>('')
    let [minute, setMinute] = useState<any>('')

    let noHourHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let h = e.currentTarget.value
        let hm = moment().hours(Number(h)).hour()
        if(hm === 0){
            setHour('')
        } else {
            setHour(hm)
        }
    }

    let onMinuteHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let m = e.currentTarget.value
        let mm = moment().minutes(Number(m)).minute()
        if (mm === 0) {
            setMinute('')
        } else {
            setMinute(mm)
        }
    }
    /* let hour = (hm > 9 && hm < 100) ? hm : `0${hm}`*/
    return <>
        <InputTimeWrapper>
            <Input type={'number'} placeholder={'00'} value={hour} onChange={noHourHandler}/>
            <Input type={'number'} placeholder={'00'} value={minute} onChange={onMinuteHandler}/>
        </InputTimeWrapper>
    </>
}

export const SetDate = () => {

    let date =  moment().year(2021).month(12).date(12)

    return <>
        <Input type={'next'} placeholder={'00'}/>
  </>
}
