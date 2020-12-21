import React from 'react';
import './Test.css'
import {Event} from './Event';

type EventType = {
    text?: string
    isEvent: boolean
    timeFrom?: string
    timeTo?: string
    time?: number
    startTime?: number
}

type EventsType = EventType[]

let event: EventsType = [
    {isEvent: false},
    {
        text: 'Meeting',
        isEvent: true,
        timeFrom: '01.45',
        timeTo: '04.25',
        time: 300,
        startTime: 75
    },
    {isEvent: false},
    {isEvent: false}, {isEvent: false}
]


export const TestPosition: React.FC = () => {
    return <div className='day-block'>
        <div className="grid-container">
            <div className='grid-time'>
                <div className='grid-item'>00.00-01.00</div>
                <div className='grid-item'>01.00-02.00</div>
                <div className='grid-item'>02.00-03.00</div>
                <div className='grid-item'>03.00-04.00</div>
                <div className='grid-item'>04.00-05.00</div>
            </div>
            <div className='grid-day'>
                {event.map((e,i) => {
                    return <div className='grid-item' key={i+'qaws'}>
                        <div className='hour' style={{position: 'relative'}}>
                              <div className='minute'>15</div>
                              <div className='minute'>30</div>
                              <div className='minute'>45</div>
                              <div className='minute'>60</div>
                            {e.isEvent &&
                            // @ts-ignore
                            <Event height={e.time} top={e.startTime} text={e.text}/>}
                          </div>
                    </div>
                })}
            </div>
        </div>
    </div>
}


let createEvent = (timeFromHour: number, timeFromMinute: number, timeToHour: number,
                   timeToMinute: number, text: string):
    EventType => {
    let timeDifferent = (timeToHour * 60 + timeToMinute) - (timeFromHour * 60 + timeFromMinute);
    let timeDifferentPercent = Math.trunc(timeDifferent * 1.67)
    let startTime = Math.trunc(timeFromMinute * 1.67)

    return {
        isEvent: true,
        text: text,
        time: timeDifferentPercent,
        startTime: startTime
    }
}

console.log(createEvent(1,45,4,45,'create'))
//15 min = 25%

//let heightCell = 100% - длина ячейки
//let heightEvent = 200% - длина события
//let fault = heightEvent - heightCell/100

/* let fault: number
    if (props.height > 100) {
        fault = (props.height - 100)/100
    }*/