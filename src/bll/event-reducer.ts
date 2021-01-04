import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {EventsType, EventType} from '../utils/typesEvent';

const initialState = {} as EventsType

const slice = createSlice({
    name: 'events',
    initialState: initialState,
    reducers: {
        addEvent(state, action: PayloadAction<{ id: string, event: EventType }>) {
            if (state[action.payload.id] === undefined) {
                state[action.payload.id] = []
                state[action.payload.id].push(action.payload.event)
            } else {
                state[action.payload.id].push(action.payload.event)
            }
        },
    },
   /* extraReducers: (builder, ) => {
        builder.addCase(addDay, (state,action)=>{
            state[action.payload.day.id] = []
        })

   }*/
})

export const eventsReducer = slice.reducer;
export const {addEvent} = slice.actions