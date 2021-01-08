import {DayType} from './typesEvent';
import {restoreDays, restoreEvents, saveDays} from '../api/localStorage';

export const createDay = (date: string): DayType => {
    let splitDate = parseDate(date)
    return {
        date: {day: Number(splitDate[0]), month: Number(splitDate[1]), year: Number(splitDate[2])},
        id: `${Number(splitDate[0])}${Number(splitDate[1])}${Number(splitDate[2])}`
    }
}

export const parseDate = (date: string) => {
    return date.split('/')
}

export const generateDays = (date: string) => {
    let days = restoreDays()
    let splitDate = parseDate(date)
    let dateString = `${Number(splitDate[0])}${Number(splitDate[1])}${Number(splitDate[2])}`
    let newDay = createDay(date)
    let copyDays: Array<DayType> = [...days]
    let isContain = copyDays.some((t: DayType) => t.id === dateString)
    if (!isContain) {
        copyDays.push(newDay)
    }
    saveDays(copyDays)
    return Promise.resolve(copyDays)
}

export const getEventsFromLocalStorage = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(restoreEvents())
        }, 1000)

    })
}

export const getDaysFromLocalStorage = () => {
    return new Promise<Array<DayType>>((resolve) => {
        setTimeout(() => {
            resolve(restoreDays())
        }, 1000)
    })
}