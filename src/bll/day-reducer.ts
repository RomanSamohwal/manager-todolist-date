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
            thunkAPI.dispatch(setAppStatus({status: 'succeeded'}))
            return {days}
        } catch (error) {

        }
    })

export const addDayTC = createAsyncThunk('days/addDay',
    async (param: { date: string }, thunkAPI) => {
        thunkAPI.dispatch(setAppStatus({status: 'loading'}))
        try {
            debugger
            let days = await dayEventApi.addDay(param.date)
            thunkAPI.dispatch(setAppStatus({status: 'succeeded'}))
            return {days}
        } catch (error) {

        }
    })

const slice = createSlice({
    name: 'days',
    initialState: initialState,
    reducers: {
        addDay(state, action: PayloadAction<{ day: DayType }>) {
            if (state.length === 0) {
                state.push(action.payload.day)
            } else {
                state.forEach((d) => {
                    if (d.id !== action.payload.day.id) {
                        state.push(action.payload.day)
                    }
                })
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchDays.fulfilled, (state, action) => {
            return action.payload?.days
        })
        builder.addCase(addDayTC.fulfilled, (state, action) => {
            debugger
            if (action.payload?.days) {
               return action.payload.days
            }

            /*  if (state.length === 0 && action.payload) {
                state.push(action.payload.day)
            } else {
                    state.forEach((d) => {
                        if (d.id !== action.payload?.day.id) {
                              if(action.payload) state.push(action.payload.day)
                        }
                    })
                }*/
        })
    }
})

export const daysReducer = slice.reducer;
export const {addDay} = slice.actions

export type ThunkError = { rejectValue: { errors: Array<string>, fieldsErrors?: Array<FieldErrorType> } }
export type FieldErrorType = { field: string; error: string }