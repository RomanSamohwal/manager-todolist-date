import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {PATH} from '../header/Path';
import {WeekContainer} from '../../features/week/WeekContainer';
import {MonthContainer} from '../../features/month/MonthContainer';
import {DayContainer} from '../../features/day/DayContainer';

export const ContentComponent = (props: any) => {
    let month = props.month
    let day = props.day
    let week = props.week
    let events = props.events
    let daysObjectArray = props.daysObjectArray
    let  dayCurrent = props.dayCurrent

    return <>
        <Switch>
            <Route path={PATH.MONTH} render={() => <MonthContainer month = {month} day = {day} events = {events} daysObjectArray = {daysObjectArray} />}/>
            <Route path={PATH.WEEK} render={() => <WeekContainer week = {week} month = {month}/> }/>
            <Route path={PATH.DAY} render={() => <DayContainer dayCurrent = {dayCurrent}/>}/>
        </Switch>
    </>
}