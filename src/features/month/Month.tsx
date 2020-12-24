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
const CellWrapper = styled.div`
  cursor: pointer;
  min-width: 140px;
  min-height: 90px;
  color: white;
  border: ${(props: any) => props.isDay ? '1px solid #2d45d8' : ' '};
  background-color: ${(props: any) => props.isWeekend ? '#272829' : '#1E1F21'} 
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
    color:  ${(props: any) => props.month ? 'white' : '#60676c'};
`

export const Month = React.memo((props: any) => {
    const DAYS_OF_THE_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const day = props.dayCurrent.clone().subtract(1, 'day');
    const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone())
    let isToday = moment().date()
    let isMonth = props.month.clone()
    console.log(isMonth.format('M'))

    return <GridWrapper>
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
                </CellWrapper>
            ))
        }
    </GridWrapper>
})