import {createSlice, PayloadAction} from '@reduxjs/toolkit';


const slice = createSlice({
        name: 'app',
        initialState: {
            isFlag: false,
            status: 'idle'
        } as StateType,
        reducers: {
             /*setCurrentDay(state, action: PayloadAction<{ dayCurrent: day}>) {
                 state.dayCurrent = action.payload.dayCurrent
             }*/
        }
    }
)

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export const appReducer = slice.reducer;
export type StateType = {
    status: RequestStatusType
    isFlag: boolean
}
/*export const {setCurrentMonth,setCurrentDay} = slice.actions*/
