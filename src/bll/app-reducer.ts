import {createSlice, PayloadAction} from '@reduxjs/toolkit';


const slice = createSlice({
        name: 'app',
        initialState: {
            dayCurrent: null,
            monthCurrent: null
        },
        reducers: {
          /*  setCurrentDay(state, action: PayloadAction<{ dayCurrent: Day}>) {
                state.dayCurrent = action.payload.dayCurrent
            },
            setCurrentMonth(state, action: PayloadAction<{ monthCurrent: any }>) {
                state.monthCurrent = action.payload.monthCurrent
            }*/
        }
    }
)

export const appReducer = slice.reducer;
/*
export const {setCurrentMonth,setCurrentDay} = slice.actions*/
