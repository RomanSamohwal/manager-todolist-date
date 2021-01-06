import {createDay, parseDate} from '../utils/createEvent';

export const saveProcesses = (state: any) => {
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
    if (localStorage.getItem('events') === null) {
        return {}
    } else {
        return JSON.parse(<string>localStorage.getItem('processes'))
    }
};

export const dayEventApi = {
    getDays: () => {
        return new Promise((resolve) => {
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
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(dayObj)
            }, 1000)
        })
    },
    addEvent: () => {
        return Promise.resolve()
    }
}