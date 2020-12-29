import {DateType, DayType, EventType, MonthTypeNumber, yearType} from './typesEvent';

export const createEvent = (timeFromHour: number, timeFromMinute: number, timeToHour: number,
                            timeToMinute: number, name: string, description: string):
    EventType => {
    let timeDifferent = (timeToHour * 60 + timeToMinute) - (timeFromHour * 60 + timeFromMinute);
    let timeDifferentPercent = Math.trunc(timeDifferent * 1.67)
    let startTime = Math.trunc(timeFromMinute * 1.67)

    return {
        name: name,
        description: description,
        left: 5,
        timeFrom: `${timeFromHour} : ${timeFromMinute}`,
        timeTo: `${timeToHour} : ${timeToMinute}`,
        time: timeDifferentPercent,
        startTime: startTime
    }
}

let event = createEvent(1, 30, 2,
    30, 'meting1', 'meeting with my friend')

export const createDay = (day: number, month: MonthTypeNumber, year: yearType): DayType => {
    return {
        date: {day, month, year},
        id: `${day}${month}${year}`
    }
}
