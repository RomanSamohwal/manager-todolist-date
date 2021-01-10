import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DayType} from '../utils/typesEvent';
import {dayEventApi} from '../api/api';
import {setAppStatus} from './app-reducer';

const initialState = [] as Array<DayType>

export const fetchDays = createAsyncThunk('days/fetchDays',
    async (param, thunkAPI) => {
        thunkAPI.dispatch(setAppStatus({status: 'loading'}))
        try {
            let days = await dayEventApi.getDays()
         /*   thunkAPI.dispatch(setAppStatus({status: 'succeeded'}))
            thunkAPI.dispatch(setAppStatus({status: 'idle'}))*/
            return {days}
        } catch (error) {

        }
    })

export const addDayTC = createAsyncThunk('days/addDay',
    async (param: { date: string }, thunkAPI) => {
        /*thunkAPI.dispatch(setAppStatus({status: 'loading'}))*/
        try {
            let days = await dayEventApi.addDay(param.date)
        /*    thunkAPI.dispatch(setAppStatus({status: 'succeeded'}))*/
            return {days}
        } catch (error) {

        }
    })

const slice = createSlice({
    name: 'days',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchDays.fulfilled, (state, action) => {
            return action.payload?.days
        })
        builder.addCase(addDayTC.fulfilled, (state, action) => {
            if (action.payload?.days) {
               return action.payload.days
            }
        })
    }
})

export const daysReducer = slice.reducer;

