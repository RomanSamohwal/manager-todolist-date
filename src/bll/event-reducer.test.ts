import {DateType, DayType, EventsType, EventDayType} from '../utils/typesEvent';
import {addDay, daysReducer} from './day-reducer';
import {addEvent, eventsReducer} from './event-reducer';

test('add new Days object and Event object', () => {
    const startDayState: Array<DayType> = []
    const startEventsState: EventsType = {}

    let date: DateType = {day: 1, month: 1, year: 2021}

    let Day: DayType = {
        date: date,
        id: '1120221'
    }


    let Event: EventDayType = {
        timeFrom: '10:22',
        timeTo: '11:22',
        name: 'meeting',
        description: 'meeting with my friend',
        time: 100,
        startTime: 45,
        left: 21
    }

    let idDay = Day.id

    const actionDays = addDay({day: Day})
    const actionEvent = addEvent({id: idDay, event: Event})

    const endDaysState = daysReducer(startDayState, actionDays)
    const endEventsState = eventsReducer(startEventsState,actionEvent)

    expect(endDaysState.length).toBe(1)
    expect(endEventsState[idDay].length).toBe(1)
    expect(endEventsState[idDay][0].name).toBe('meeting')
})