import {generateDays} from '../utils/createDay';
import {DataType, generateEventOfDays} from '../utils/createEventOfDay';
import {DayType} from '../utils/typesEvent';
import {restoreDays, restoreEvents, saveDays} from './localStorage';

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
        let newDays = generateDays(days, date)
        saveDays(newDays)
        return new Promise<Array<DayType>>((resolve) => {
            setTimeout(() => {
                resolve(newDays)
            }, 0)
        })
    },
    addEvent: (data: DataType, date: string) => {
        return generateEventOfDays(data, date)
    }
}