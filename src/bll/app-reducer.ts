import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: InitialStateType = {
    status: 'idle',
    error: null
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

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export const appReducer = slice.reducer;

export type InitialStateType = {
    status: RequestStatusType
    error: string | null
}
export const {setAppStatus} = slice.actions
