import React from 'react';
import './Week.css'
import {CellWrapper, DayWrapper, GridWrapper, RowInCell} from '../styled/Styled';
import moment from 'moment';
import {DayForMonth} from '../month/DayForMonth';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../bll/store';

export const Week = (props: any) => {
    const DAYS_OF_THE_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    let isToday = moment().date()
    let isMonth = props.month.clone()
    let days = useSelector<AppRootStateType>(state => state.days)

    return <GridWrapper
        // @ts-ignore
        rows = {'1fr 7fr'}
        height = {'90vh'}
    >
        {DAYS_OF_THE_WEEK.map((d,i) => {
            return <CellWrapper key = {i}>
                <RowInCell
                    // @ts-ignore
                    justifyContent={'center'}>
                    <DayWrapper
                        // @ts-ignore
                        month={true}
                    >{d}</DayWrapper>
                </RowInCell>
            </CellWrapper>
        })}
        {props.currentWeekArray.map((dayItem: any,i: any) => {
            return <CellWrapper key = {dayItem.format('DDDMMMYYYY')}
                // @ts-ignore
                isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
                                isDay={dayItem.format('D') == isToday && isMonth.format('M') == dayItem.format('M')}
            >
                <RowInCell>
                    <DayWrapper
                        // @ts-ignore
                        month={isMonth.format('M') == dayItem.format('M')}
                    >
                        {dayItem.format('D')}
                    </DayWrapper>
                </RowInCell>
                { // @ts-ignore
                    days.length > 0 ? <DayForMonth dayItem={dayItem} days = {days} isWeek = {true}/> : ''}
            </CellWrapper>
        })}
    </GridWrapper>
}
