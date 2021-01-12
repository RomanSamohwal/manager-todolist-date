import React from 'react';
import './Month.css'
import moment from 'moment';
import {CellWrapper, DayWrapper, GridWrapper, RowInCell} from '../styled/Styled';
import {DayType, EventDayType} from '../../utils/typesEvent';

export const Month = React.memo((props: any) => {
    const DAYS_OF_THE_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const day = props.dayCurrent.clone().subtract(1, 'day');
    const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone())

    let isToday = moment().date()
    let isMonth = props.month.clone()
    let events = props.events

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
                    {daysObjectArray.length > 0 ? <div className='block_event'>
                        {daysObjectArray.map((d: DayType) => {
                                if (d.date.year === +dayItem.format('Y') &&
                                    d.date.month === +dayItem.format('M') &&
                                    d.date.day === +dayItem.format('D')) {
                                    return <>
                                        {events[d.id] ? events[d.id].map((e: EventDayType, i: any) => {
                                                if (i < 3) {
                                                    return <div className='event'>
                                                        <div>{e.name}</div>
                                                        <div className='time-block'>
                                                            <div className='time-inner-block'>{String(e.timeFromHour).length > 1 ?
                                                                e.timeFromHour : '0' + e.timeFromHour} <div>:</div>
                                                                {String(e.timeFromMinute).length > 1 ?
                                                                    e.timeFromMinute :
                                                                    '0' + e.timeFromMinute
                                                                }</div>
                                                            <div>-</div>
                                                            <div className='time-inner-block'>{String(e.timeToHour).length > 1 ?
                                                                e.timeToHour : '0' + e.timeToHour}
                                                                <div>:</div> {String(e.timeToMinute).length > 1 ?
                                                                    e.timeToMinute : '0' + e.timeToMinute
                                                                }</div>
                                                        </div>
                                                    </div>
                                                } else {
                                                    return <div className='more' onClick={() => {
                                                        alert('more')
                                                    }}>{'+2 more'}</div>
                                                }
                                            }
                                        ) : ''}
                                    </>
                                }
                            }
                        )}
                    </div> : ''}
                </CellWrapper>
            ))
        }
    </GridWrapper>
})