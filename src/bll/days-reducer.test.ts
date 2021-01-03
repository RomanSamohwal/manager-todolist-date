import {DateType, DayType} from '../utils/typesEvent';
import {addDay, daysReducer} from './day-reducer';

test('add new Days object', () => {
    const startDayState: Array<DayType> = []

    let date: DateType = {day: 1, month: 1, year: 2021}

    let Day: DayType = {
        date: date,
        id: '1120221'
    }

    const action = addDay({day: Day})
    const endDaysState = daysReducer(startDayState, action)

    expect(endDaysState.length).toBe(1)
})