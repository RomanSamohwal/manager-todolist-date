import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {EventsType} from '../utils/typesEvent';
import {dayEventApi} from '../api/api';
import {DataType} from '../utils/createEventOfDay';
import {setAppStatus} from './app-reducer';

const initialState = {
    events: {} as EventsType,
    error: ''
}

export const fetchEvents = createAsyncThunk('events/fetchEvents',
    async (param, thunkAPI) => {
        let events = await dayEventApi.getEventsOfDays()
         thunkAPI.dispatch(setAppStatus({status: 'succeeded'}))
        return {events}
    })

export const addEventTS = createAsyncThunk('events/addEvents',
    async (param: { data: DataType, idDate: string }, thunkAPI) => {
        try {
            let events = await dayEventApi.addEvent(param.data, param.idDate)

            return {events}
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(error)
        }
    })

const slice = createSlice({
    name: 'events',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder,) => {
        builder.addCase(fetchEvents.fulfilled, (state, action) => {
            if (action.payload.events) {
                // @ts-ignore
                state.events = action.payload.events
            }
        })

        builder.addCase(addEventTS.fulfilled, (state, action) => {
            if (action.payload?.events) {
                state.events = action.payload.events
            }
        })
        builder.addCase(addEventTS.rejected, (state, action) => {
            if (action.payload === 'this event across with another events') {
                state.error = action.payload
            }
        })

    }
})

export const eventsReducer = slice.reducer;
