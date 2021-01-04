export type EventType = {
    name: string
    description: string
    left: number
    timeFromHour: number
    timeFromMinute: number
    timeToHour: number
    timeToMinute: number
    time: number
    startTime: number
}

export type DateType = {
  day: number
  month: number
  year: number
}

export type DayType = {
    id: string
    date:DateType
}

type MonthType = 'January'| 'February'| 'March'| 'April'| 'May'| 'June'|
    'July'| 'August'| 'September'| 'October'| 'November'| 'December'

export type MonthTypeNumber = 1|2|3|4|5|6|7|8|9|10|11|12

/*export type yearType = 2020|2021|2022|2023|2024|2025|2026|2027|2028|2029|2030*/

export type EventsType = {
    [key: string]: Array<EventType>
}