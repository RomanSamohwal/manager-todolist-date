import {changeDays, createDay} from '../utils/createDay';
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

export const dayEventApi = {
    getDays: () => {
        return new Promise<Array<DayType>>((resolve) => {
            setTimeout(() => {
                resolve(restoreDays())
            }, 2000)
        })
    },
    getEventsOfDays: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(restoreEvents())
            }, 2000)
        })
    },
    addDay: (date: string) => {
        let days = restoreDays()
        let newDays = changeDays(days,date)
        saveDays(newDays)
        return new Promise<Array<DayType>>((resolve) => {
            setTimeout(() => {
                resolve(newDays)
            }, 1000)
        })
    },
    addEvent: () => {
        return Promise.resolve()
    }
}