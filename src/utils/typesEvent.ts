export type EventType = {
    name: string
    description: string
    left: number
    timeFrom: string
    timeTo: string
    time: number
    startTime: number
}

export type DateType = {
  day: number
  month: MonthTypeNumber
  year: yearType
}

export type DayType = {
    id: string
    date:DateType
}

type MonthType = 'January'| 'February'| 'March'| 'April'| 'May'| 'June'|
    'July'| 'August'| 'September'| 'October'| 'November'| 'December'

export type MonthTypeNumber = 1|2|3|4|5|6|7|8|9|10|11|12

export type yearType = 2020|2021|2022|2023|2024

export type EventsType = {
    [key: string]: Array<EventType>
}