import {createDay} from '../utils/createEvent';
import {DayType} from '../utils/typesEvent';

export const saveEvents = (state: any) => {
    localStorage.setItem('events', JSON.stringify(state));
};

export const saveDays = (state: any) => {
    localStorage.setItem('days', JSON.stringify(state));
};


export const restoreEvents = () => {
    if (localStorage.getItem('events') === null) {
        return {}
    } else {
        return JSON.parse(<string>localStorage.getItem('processes'))
    }
};

export const restoreDays = () => {
    if (localStorage.getItem('days') === null) {
        return [] as Array<DayType>
    } else {
        return JSON.parse(<string>localStorage.getItem('processes'))
    }
};

export const dayEventApi = {
    getDays: () => {
        return new Promise<Array<DayType>>((resolve) => {
            setTimeout(() => {
                resolve(restoreDays())
            }, 2000)
        })
    }
    ,
    getEventsOfDays: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(restoreEvents())
            }, 2000)
        })
    },
    addDay: (date: string) => {
        let dayObj = createDay(date)
        return new Promise<DayType>((resolve) => {
            setTimeout(() => {
                resolve(dayObj)
            }, 1000)
        })
    },
    addEvent: () => {
        return Promise.resolve()
    }
}