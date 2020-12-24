import React from 'react';
import {Route, Switch } from 'react-router-dom';
import {PATH} from '../header/Path';
import {WeekContainer} from '../../features/week/WeekContainer';
import {MonthContainer} from '../../features/month/MonthContainer';
import {DayContainer} from '../../features/day/DayContainer';

export const ContentComponent = () => {
    return <>
        <Switch>
            <Route path={PATH.MONTH} render={() => <MonthContainer/>}/>
            <Route path={PATH.WEEK} render={() => <WeekContainer/>}/>
            <Route path={PATH.DAY} render={() => <DayContainer/>}/>
        </Switch>
    </>
}