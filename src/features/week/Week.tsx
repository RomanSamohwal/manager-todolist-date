import React from 'react';
import './Week.css'
import {CellWrapper, DayWrapper, GridWrapper, RowInCell} from '../styled/Styled';

export const Week = (props: any) => {
    const DAYS_OF_THE_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const week = props.weekCurrent.clone().subtract(1, 'day');
 /*   console.log(week)*/
    const days = [...Array(7)].map(() => week.add(1, 'day').clone())
    /*console.log(days)*/
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
        {days.map((d,i) => {
            return <CellWrapper key = {i+''}>
                <RowInCell>
                    <DayWrapper>
                        {d.format('D')}
                    </DayWrapper>
                </RowInCell>
            </CellWrapper>
        })}
    </GridWrapper>
}
