import {generateDays, getDaysFromLocalStorage, getEventsFromLocalStorage} from '../utils/createDay';
import {DataType, generateEventOfDays} from '../utils/createEventOfDay';

export const dayEventApi = {
    getDays: () => {
        return getDaysFromLocalStorage()
    },
    getEventsOfDays: () => {
        return getEventsFromLocalStorage()
    },
    addDay: (date: string) => {
        return generateDays(date)
    },
    addEvent: (data: DataType, date: string) => {
        return generateEventOfDays(data, date)
    }
}