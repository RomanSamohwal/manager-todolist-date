import {DayType, EventType} from './typesEvent';

export const createEvent = (timeFromHour: number = 0, timeFromMinute: number = 0, timeToHour: number = 0,
                            timeToMinute: number = 0, name: string = '', description: string = ''):
    EventType => {
    let timeDifferent = (timeToHour * 60 + timeToMinute) - (timeFromHour * 60 + timeFromMinute);
    let timeDifferentPercent = Math.trunc(timeDifferent * 1.67)
    let startTime = Math.trunc(timeFromMinute * 1.67)

    return {
        name: name,
        description: description,
        left: 5,
        timeFromHour: timeFromHour,
        timeFromMinute: timeFromMinute,
        timeToHour: timeToHour,
        timeToMinute: timeToMinute,
        time: timeDifferentPercent,
        startTime: startTime
    }
}

export const createDay = (day: number, month: number, year: number): DayType => {
    return {
        date: {day, month, year},
        id: `${day}${month}${year}`
    }
}

export const ParseDate = (date: string) => {
    return date.split('/')
}