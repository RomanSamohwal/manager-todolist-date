import {combineReducers, configureStore} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk'
import {useDispatch} from 'react-redux';
import {appReducer} from './app-reducer';
import {daysReducer} from './day-reducer';

const rootReducer = combineReducers({
    app: appReducer,
    days:daysReducer
})

export type RootReducerType = typeof rootReducer

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

export type AppRootStateType = ReturnType<RootReducerType>
export type AppDispatchType = typeof store.dispatch
export const useAppDispatch = () => <AppDispatchType>useDispatch()
