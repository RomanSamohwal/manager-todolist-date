import React from 'react';
import './Day.css'
import styled from 'styled-components';
import {EventType} from '../../utils/typesEvent';
import {Event} from '../../components/event/Event';

export const GridWrapperDay = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
    "t d";
    border: 1px solid  #404040;;
    box-sizing: border-box;
    margin: -1px -1px 0 0;
    height: 90vh;
`
export const GridWrapperColumn = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(24,1fr);
    grid-area: ${(props: any) => props.area};
    border: 1px solid  #404040;;
    box-sizing: border-box;
    margin: -1px -1px 0 0;
`
export const CellWrapperDay = styled.div`
    min-width: 10vw;
    min-height: 6px;
    color: white;
    text-align: center;
    border: 1px solid #404040;;
    background-color: #222327;
    box-sizing: border-box;
    margin: -1px -1px 0 0;
`
type EventsType = EventType[]
type HourCellType = {
    isEvent: boolean
    eventsKey?: EventsType
}
type HoursCellType = HourCellType[]

export const Day: React.FC = () => {
    const time = [
        '00.00 - 01.00',
        '01.00 - 02.00',
        '02.00 - 03.00',
        '03.00 - 04.00',
        '04.00 - 05.00',
        '05.00 - 06.00',
        '06.00 - 07.00',
        '07.00 - 08.00',
        '08.00 - 09.00',
        '09.00 - 10.00',
        '10.00 - 11.00',
        '11.00 - 12.00',
        '12.00 - 13.00',
        '13.00 - 14.00',
        '14.00 - 15.00',
        '15.00 - 16.00',
        '16.00 - 17.00',
        '17.00 - 18.00',
        '18.00 - 19.00',
        '19.00 - 20.00',
        '20.00 - 21.00',
        '21.00 - 22.00',
        '22.00 - 23.00',
        '23.00 - 24.00',
    ]
    const task = [...Array(24)]

    for (let i = 0; i < task.length; i++) {
        task[i] = {isEvent: false}
        if (i === 1) {
            task[i] = {
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
                    time: 50,
                    startTime: 0,
                    left: 35
                }]
            }
        }
    }

    console.log(task)

    return <GridWrapperDay>
        <GridWrapperColumn
            // @ts-ignore
            area = {'t'}>
            {time.map(t => {
                return <CellWrapperDay>
                    {t}
                </CellWrapperDay>
            })}
        </GridWrapperColumn>
        <GridWrapperColumn
            // @ts-ignore
            area = {'d'}>
            {task.map(d => {
                    return <CellWrapperDay>
                        <div className='hour' style={{position: 'relative'}}>
                        {/*<div className='minute'>15</div>
                        <div className='minute'>30</div>
                        <div className='minute'>45</div>
                        <div className='minute'>60</div>*/}
                            {d.isEvent &&
                            // @ts-ignore
                            d.eventsKey.map((e: EventType) => {
                                    return <Event height={e.time} top={e.startTime}
                                                   left={e.left}/>
                                }
                            )}
                        </div>
                    </CellWrapperDay>
                }
            )}
        </GridWrapperColumn>
    </GridWrapperDay>
}