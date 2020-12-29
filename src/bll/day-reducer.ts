import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DayType} from '../utils/typesEvent';

const initialState = [] as Array<DayType>

const slice = createSlice({
    name: 'days',
    initialState: initialState,
    reducers: {
        addDay(state, action: PayloadAction<{day: DayType}>) {
            state.push(action.payload.day)
        }
    }
})

export const daysReducer = slice.reducer;
export const {addDay} = slice.actions