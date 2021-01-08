import React from 'react';
import {Main} from './Main';
import {AppRootStateType, useAppDispatch} from '../bll/store';
import {fetchEvents} from '../bll/event-reducer';
import {fetchDays} from '../bll/day-reducer';
import { useSelector } from 'react-redux';
import {RequestStatusType} from '../bll/app-reducer';
import {Loader} from '../components/loader/Loader';

export const App = () => {
    const dispatch = useAppDispatch()
    let status = useSelector<AppRootStateType>(state => state.app.status)
    dispatch(fetchDays())
    dispatch(fetchEvents())

   /* if (status === 'loading'){
        return <Loader/>
    }*/

    return <Main/>
}

export default App;
