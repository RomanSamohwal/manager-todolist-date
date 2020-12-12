import React from 'react';
import './Month.css'
import styled from 'styled-components';
import moment from 'moment';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7,1fr);
  grid-template-rows: repeat(7,1fr);
  grid-gap: 1px;
  background-color: #404040;
`
//background-color: ${props => props.isWeekend ? '#272829' : '#1E1F21'}
const CellWrapper = styled.div`
  min-width: 140px;
  min-height: 80px;
  color: white;
  background-color: #1E1F21;
`
const RowInCell = styled.div`
  display: flex;
  justify-content: ${(props: any) => props.justifyContent ? props.justifyContent : 'flex-start'}
`
const DayWrapper = styled.div`
    height: 33px;
    width: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Month = React.memo((props: any) => {
    const DAYS_OF_THE_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

    const day = props.dayCurrent.clone().subtract(1,'day');

    const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone())

    console.log(daysArray)


    return <GridWrapper>
        {DAYS_OF_THE_WEEK.map(d => (
            <CellWrapper>
                <RowInCell
                    // @ts-ignore
                    justifyContent = {'center'}>
                    <DayWrapper>{d}</DayWrapper>
                </RowInCell>
            </CellWrapper>
        ))}
        {
            daysArray.map((dayItem, i) => (
                <CellWrapper
                    key={dayItem.format('DDDMMMYYYY')}
                    /* isWeekend={dayItem.day() === 6 || dayItem.day() === 0}*/
                >
                    <RowInCell
                        // @ts-ignore
                        justifyContent = {'flex-start'}
                    >
                        <DayWrapper>
                            {dayItem.format('D')}
                        </DayWrapper>
                    </RowInCell>
                </CellWrapper>
            ))
        }
    </GridWrapper>
})