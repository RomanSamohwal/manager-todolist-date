import React, {useState} from 'react';
import './Week.css'
import {Week} from './Week';

export const WeekContainer = (props: any) => {
    let weekCurrent = props.week
    return <Week weekCurrent = {weekCurrent}/>
}