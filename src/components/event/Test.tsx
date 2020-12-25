import React from 'react';
import './Test.css'
import {Event} from './Event';
import { EventType } from '../../utils/typesEvent';

type EventsType = EventType[]
type HourCellType = {
    isEvent: boolean
    eventsKey?: EventsType
}
type HoursCellType = HourCellType[]



let hoursCell: HoursCellType = [{isEvent: false},
    {
        isEvent: true, eventsKey: [{
            text: 'Meeting',
            timeFrom: '01.45',
            timeTo: '04.25',
            time: 300,
            startTime: 75,
            left: 1
        }, {
            text: 'Meeting2',
            timeFrom: '01.00',
            timeTo: '02.30',
            time: 90,
            startTime: 0,
            left: 35
        }]
    }, {isEvent: false},
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
                {hoursCell.map((h,i) => {
                    return <div className='grid-item' key={i+'qaws'}>
                        <div className='hour' style={{position: 'relative'}}>
                              <div className='minute'>15</div>
                              <div className='minute'>30</div>
                              <div className='minute'>45</div>
                              <div className='minute'>60</div>
                            {h.isEvent &&
                            // @ts-ignore
                            h.eventsKey.map((e: EventType) => {
                                    return <Event height={e.time} top={e.startTime}
                                                  text={e.text} left={e.left}/>
                                }
                            )}
                          </div>
                    </div>
                })}
            </div>
        </div>
    </div>
}



