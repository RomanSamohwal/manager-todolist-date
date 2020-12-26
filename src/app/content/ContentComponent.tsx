import React from 'react';
import {Route, Switch } from 'react-router-dom';
import {PATH} from '../header/Path';
import {WeekContainer} from '../../features/week/WeekContainer';
import {MonthContainer} from '../../features/month/MonthContainer';
import {DayContainer} from '../../features/day/DayContainer';
import {TestPosition} from '../../components/event/Test';

export const ContentComponent = (props: any) => {
    let month = props.month
    let day = props.day
    let week = props.week

    return <>
        <Switch>
            <Route path={PATH.MONTH} render={() => <MonthContainer month = {month} day = {day}/>}/>
            <Route path={PATH.WEEK} render={() => <WeekContainer week = {week}/>}/>
            <Route path={PATH.DAY} render={() => <DayContainer/>}/>
        </Switch>
    </>
}