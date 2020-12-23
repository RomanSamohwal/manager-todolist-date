import {EventType} from './typesEvent';

export const createEvent = (timeFromHour: number, timeFromMinute: number, timeToHour: number,
                   timeToMinute: number, text: string):
    EventType => {
    let timeDifferent = (timeToHour * 60 + timeToMinute) - (timeFromHour * 60 + timeFromMinute);
    let timeDifferentPercent = Math.trunc(timeDifferent * 1.67)
    let startTime = Math.trunc(timeFromMinute * 1.67)

    return {
        left: 5,
        timeFrom: '',
        timeTo: '',
        text: text,
        time: timeDifferentPercent,
        startTime: startTime
    }
}
