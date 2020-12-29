import React, {useState} from 'react';
import './Month.css'
import moment from 'moment';
import {CellWrapper, DayWrapper, GridWrapper, RowInCell} from '../styled/Styled';
import {DayType, EventType} from '../../utils/typesEvent';

export const Month = React.memo((props: any) => {

    const DAYS_OF_THE_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const day = props.dayCurrent.clone().subtract(1, 'day');
    const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone())

    let isToday = moment().date()
    let isMonth = props.month.clone()
    let events = props.events
    console.log(events)
    let daysObjectArray = props.daysObjectArray

    return <GridWrapper
        // @ts-ignore
        rows={'repeat(7,1fr)'}>
        {DAYS_OF_THE_WEEK.map(d => (
            <CellWrapper key={d}>
                <RowInCell
                    // @ts-ignore
                    justifyContent={'center'}>
                    <DayWrapper
                        // @ts-ignore
                        month={true}
                    >{d}</DayWrapper>
                </RowInCell>
            </CellWrapper>
        ))}
        {
            daysArray.map((dayItem, i) => (
                <CellWrapper
                    key={dayItem.format('DDDMMMYYYY')}
                    // @ts-ignore
                    isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
                    isDay={dayItem.format('D') == isToday && isMonth.format('M') == dayItem.format('M')}
                >
                    <RowInCell
                        // @ts-ignore
                        justifyContent={'flex-start'}
                    >
                        <DayWrapper
                            // @ts-ignore
                            month={isMonth.format('M') == dayItem.format('M')}
                        >
                            {dayItem.format('D')}
                        </DayWrapper>
                    </RowInCell>
                    <div className='block_event'>
                        {daysObjectArray.map((d: DayType) => {
                                if (d.date.year === +dayItem.format('Y') &&
                                    d.date.month === +dayItem.format('M') &&
                                    d.date.day === +dayItem.format('D')) {
                                    return <>
                                        {events[d.id].map((e: any, i: any) => {
                                                if (i < 3) {
                                                    return <div className='event'>
                                                        <span>{e.name}</span>
                                                        <span>{e.timeFrom}</span>
                                                        <span>-</span>
                                                        <span>{e.timeTo}</span>
                                                    </div>
                                                } else {
                                                   return <div className='more' onClick={()=>{
                                                       alert('more')
                                                   }}>{'2+ more'}</div>
                                                }
                                            }
                                        )}
                                    </>
                                }
                            }
                        )}
                    </div>
                </CellWrapper>
            ))
        }
    </GridWrapper>
})