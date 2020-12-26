import styled, {CSSObject, StyledComponentBase} from 'styled-components';

export const GridWrapper = styled.div`
    height: 92vh;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: ${(props: any) => props.rows};
    grid-gap: 1px;
    background-color: #404040;
    margin: 1px;
`
export const CellWrapper = styled.div`
    cursor: pointer;
    min-width: 10vw;
    min-height: 13vh;
    color: white;
    border: ${(props: any) => props.isDay ? '1px solid #2d45d8' : ' '};
    background-color: ${(props: any) => props.isWeekend ? '#272829' : '#1E1F21'} 
`
export const RowInCell = styled.div`
    display: flex;
    justify-content: ${(props: any) => props.justifyContent ? props.justifyContent : 'flex-start'}
`
export const DayWrapper = styled.div`
    height: 33px;
    width: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:  ${(props: any) => props.month ? 'white' : '#60676c'};
`
