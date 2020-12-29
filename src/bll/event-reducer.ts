import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {EventType} from '../utils/typesEvent';

const initialState = {} as EventType

const slice = createSlice({
    name: 'events',
    initialState: initialState,
    reducers: {
       addEvent(state, action: PayloadAction<{id: string,event: EventType}>){
         /*   state[action.payload.id] = [action.payload.event]*/
       }
    }
})