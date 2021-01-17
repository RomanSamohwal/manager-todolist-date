import React from 'react';
import moment from 'moment';
import {CellWrapper, DayWrapper, GridWrapper, RowInCell} from '../styled/Styled';
import {DayForMonth} from './DayForMonth';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../bll/store';

export const Month = React.memo((props: any) => {

    const DAYS_OF_THE_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const day = props.dayCurrent.clone().subtract(1, 'day');
    const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone())

    let isToday = moment().date()
    let isMonth = props.month.clone()
    let days = useSelector<AppRootStateType>(state => state.days)
    // @ts-ignore
    return <GridWrapper
        // @ts-ignore
        rows={'repeat(7,1fr)'}
        height = {'115vh'}
    >
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
                    { // @ts-ignore
                        days.length > 0 ? <DayForMonth dayItem={dayItem} days = {days}/> : ''}
                </CellWrapper>))}
    </GridWrapper>
})