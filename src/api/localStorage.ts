import {DayType} from '../utils/typesEvent';

export const saveEvents = (state: any) => {
    localStorage.setItem('events', JSON.stringify(state));
};

export const saveDays = (state: Array<DayType>) => {
    localStorage.setItem('days', JSON.stringify(state));
};


export const restoreEvents = () => {
    if (localStorage.getItem('events') === null) {
        return {}
    } else {
        return JSON.parse(<string>localStorage.getItem('events'))
    }
};

export const restoreDays = () => {
    if (localStorage.getItem('days') === null) {
        return []
    } else {
        return JSON.parse(<string>localStorage.getItem('days'))
    }
};