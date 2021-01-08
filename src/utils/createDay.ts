import {DayType} from './typesEvent';

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

export const generateDays = (days: Array<DayType> = [], date: string) => {
    let splitDate = parseDate(date)
    let dateString = `${Number(splitDate[0])}${Number(splitDate[1])}${Number(splitDate[2])}`
    let newDay = createDay(date)
    let copyDays: Array<DayType> = [...days]
    let isContain = copyDays.some((t: DayType) => t.id === dateString)
    if (!isContain) {
        copyDays.push(newDay)
    }


    return copyDays
}