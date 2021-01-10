import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: InitialStateType = {
    status: 'idle',
    error: null,
    calendarSwitch: 'day'
}

const slice = createSlice({
        name: 'app',
        initialState: initialState,
        reducers: {
            setAppStatus(state, action: PayloadAction<{ status: RequestStatusType }>) {
                state.status = action.payload.status
            },
            setAppErrorAC: (state, action: PayloadAction<{ error: string | null }>) => {
                state.error = action.payload.error
            }
        }
    }
)

export const appReducer = slice.reducer;

//types
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type InitialStateType = {
    status: RequestStatusType
    error: string | null,
    calendarSwitch: CalendarSwitchType
}
export const {setAppStatus} = slice.actions
export type CalendarSwitchType = 'month' | 'week' | 'day'