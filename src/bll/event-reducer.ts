import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {EventsType, EventType} from '../utils/typesEvent';

const initialState = {} as EventsType

const slice = createSlice({
    name: 'events',
    initialState: initialState,
    reducers: {
       addEvent(state, action: PayloadAction<{id: string, event: EventType}>){
            state[action.payload.id] = []
            state[action.payload.id].push(action.payload.event)
       }
    }
})

export const eventsReducer = slice.reducer;
export const {addEvent} = slice.actions