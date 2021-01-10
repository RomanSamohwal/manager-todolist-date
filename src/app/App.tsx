import React, {useEffect} from 'react';
import {Main} from './Main';
import {AppRootStateType, useAppDispatch} from '../bll/store';
import {fetchEvents} from '../bll/event-reducer';
import {fetchDays} from '../bll/day-reducer';
import {useSelector} from 'react-redux';
import {Loader} from '../components/loader/Loader';

export const App = () => {
    const dispatch = useAppDispatch()
    let status = useSelector<AppRootStateType>(state => state.app.status)

    useEffect(() => {
        dispatch(fetchDays())
        dispatch(fetchEvents())
    }, [])

    if (status === 'succeeded'){
        return <Loader/>
    }

    return <Main/>
}

export default App;
