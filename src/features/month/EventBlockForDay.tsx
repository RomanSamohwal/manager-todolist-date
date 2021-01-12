import React from 'react';
import './Month.css'
import {EventDayType} from '../../utils/typesEvent';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../bll/store';
import {Block, EventForMonthWrapper, EventMoreWrapper, TimeInnerBlock, TimeWrapper} from './Styled';

type PropsType = {
    id: string
}

export const EventBlockForMonth = (props: PropsType) => {
    let events = useSelector<AppRootStateType>(state => state.events.events)

    return <>
        { // @ts-ignore
            events[props.id] ? events[props.id].map((e: EventDayType, i: number) => {
                    if (i < 3) {
                        return <EventForMonthWrapper>
                            <Block>{e.name}</Block>
                            <TimeWrapper>
                                <TimeInnerBlock>{String(e.timeFromHour).length > 1 ?
                                    e.timeFromHour : '0' + e.timeFromHour}
                                    <Block>:</Block>
                                    {String(e.timeFromMinute).length > 1 ?
                                        e.timeFromMinute :
                                        '0' + e.timeFromMinute
                                    }</TimeInnerBlock>
                                <Block>-</Block>
                                <TimeInnerBlock>{String(e.timeToHour).length > 1 ?
                                    e.timeToHour : '0' + e.timeToHour}
                                    <Block>:</Block>
                                    {String(e.timeToMinute).length > 1 ?
                                        e.timeToMinute : '0' + e.timeToMinute
                                    }</TimeInnerBlock>
                            </TimeWrapper>
                        </EventForMonthWrapper>
                    } else {
                        return <EventMoreWrapper>{'+2 more'}</EventMoreWrapper>
                    }
                }
            ) : ''}
    </>
}