import styled from 'styled-components';

export const DayForMonthWrapper = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const EventForMonthWrapper = styled.div`
  width: 95%;
  min-height: 3.2vh;
  font-size: 1.7vh;
  display: flex;
  justify-content: space-between;
  text-align: center;
  background-color: green;
  border-radius: 5px;
  margin-top: 2px;
  padding-left: 5px;
  padding-right: 5px;
  @media screen and (max-width: 950px) {
      font-size: 1.3vh;
  }
  @media screen and (max-width: 730px) {
      font-size: 1vh;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }
`
export const TimeInnerBlock = styled.div`
  display: flex;
  justify-content: space-around;
`
export const EventMoreWrapper = styled.div`
  width: 100%;
  min-height: 20%;
  text-align: center;
  font-size: 1.5vh;
`
export const TimeWrapper = styled.div`
  display: flex;
`
export const Block = styled.div`
    
`