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
    fault?: number
}

type EventsType = EventType[]

let event: EventsType = [
    {
        text: 'Meeting',
        isEvent: true,
        timeFrom: '00.00',
        timeTo: '01.00',
        time: 100,
        startTime: 0,
        fault: 2
    },


    {isEvent: false}, {isEvent: false}
]

export const TestPosition: React.FC = () => {
    return <div className='day-block'>
        <div className="grid-container">
            <div className='grid-time'>
                <div className='grid-item'>00.00-01.00</div>
                <div className='grid-item'>01.00-02.00</div>
                <div className='grid-item'>02.00-03.00</div>
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
                            <Event height={e.time} top={e.startTime} fault={e.fault} text={e.text}/>}
                          </div>
                    </div>
                })}
            </div>
        </div>
    </div>
}

//15 min = 25%

//let heightCell = 100% - длина ячейки
//let heightEvent = 200% - длина события
//let fault = heightEvent - heightCell/100

/* let fault: number
    if (props.height > 100) {
        fault = (props.height - 100)/100
    }*/