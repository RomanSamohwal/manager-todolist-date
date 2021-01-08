import {EventDayType} from './typesEvent';
import {parseDate} from './createDay';
import {restoreEvents, saveEvents} from '../api/localStorage';

export const createEventOfDay = (timeFromHour: number = 0, timeFromMinute: number = 0, timeToHour: number = 0,
                                 timeToMinute: number = 0, name: string = '', description: string = ''):
    EventDayType => {
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

export type DataType = {
    timeFromHour: number
    timeFromMinute: number
    timeToHour: number
    timeToMinute: number
    name: string
    description: string
}

export const checkEvents = (eventDay: Array<EventDayType>, data: DataType): boolean => {
    let acrossEvent: boolean = false
    eventDay.forEach((e: EventDayType) => {
        let start1 = transformPartOfHour(data.timeFromHour, data.timeFromMinute)
        let start2 = transformPartOfHour(e.timeFromHour, e.timeFromMinute)
        let finish1 = transformPartOfHour(data.timeToHour, data.timeToMinute)
        let finish2 = transformPartOfHour(e.timeToHour, e.timeToMinute)
        if (start1 <= finish2 && start2 <= finish1) {
            acrossEvent = true
        }
    })
    return acrossEvent
}


export const generateEventOfDays = (data: DataType, date: string) => {
    debugger
    let splitDate = parseDate(date)
    let dateString = `${Number(splitDate[0])}${Number(splitDate[1])}${Number(splitDate[2])}`
    let prom = null
    let event = createEventOfDay(data.timeFromHour, data.timeFromMinute,
        data.timeToHour, data.timeToMinute, data.name, data.description)
    let events = restoreEvents()

    if (events[dateString]) {
        let cheekedValue = checkEvents(events[dateString], data)
        if (!cheekedValue) {
            events[dateString].push(event)
            prom = Promise.resolve(events)
        } else {
            prom = Promise.reject('this event across with another events')
        }
    }
    if (!events[dateString]) {
        events[dateString] = []
        events[dateString].push(event)
    }
    saveEvents(events)
    return prom
}

let transformPartOfHour = (hour: number, minute: number) => {
    let partOfHour = Math.round(((minute / 60) * 100)) / 100
    return hour + partOfHour
}