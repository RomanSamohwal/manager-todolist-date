import React from 'react';
import './Week.css'
import {CellWrapper, DayWrapper, GridWrapper, RowInCell} from '../styled/Styled';

export const Week = () => {
    const DAYS_OF_THE_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const days = [...Array(7)]
    return <GridWrapper
        // @ts-ignore
        rows = {'1fr 7fr'}>
        {DAYS_OF_THE_WEEK.map(d => {
            return <CellWrapper>
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
        {days.map(d => {
            return <CellWrapper>
                <RowInCell>
                    <DayWrapper>
                        {d}
                    </DayWrapper>
                </RowInCell>
            </CellWrapper>
        })}
    </GridWrapper>
}
