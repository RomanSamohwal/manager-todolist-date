import React from 'react';
import './Week.css'
import {CellWrapper, DayWrapper, GridWrapper, RowInCell} from '../styled/Styled';
import moment from 'moment';

export const Week = (props: any) => {
    const DAYS_OF_THE_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    let isToday = moment().date()
    let isMonth = props.month.clone()

    return <GridWrapper
        // @ts-ignore
        rows = {'1fr 7fr'}>
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
        {props.currentWeekArray.map((d: any,i: any) => {
            return <CellWrapper key = {d.format('DDDMMMYYYY')}
                // @ts-ignore
                isWeekend={d.day() === 6 || d.day() === 0}
                                isDay={d.format('D') == isToday && isMonth.format('M') == d.format('M')}
            >
                <RowInCell>
                    <DayWrapper
                        // @ts-ignore
                        month={isMonth.format('M') == d.format('M')}
                    >
                        {d.format('D')}
                    </DayWrapper>
                </RowInCell>
            </CellWrapper>
        })}
    </GridWrapper>
}
