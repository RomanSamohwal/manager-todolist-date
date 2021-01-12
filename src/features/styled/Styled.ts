import styled from 'styled-components';
//month and week
export const GridWrapper = styled.div`
    height: 110vh;
    width: 100vw;
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
    min-height: 15vh;
    color: white;
    border: ${(props: any) => props.isDay ? '1px solid #2d45d8' : ' '};
    background-color: ${(props: any) => props.isWeekend ? '#272829' : '#1E1F21'} 
`
export const RowInCell = styled.div`
    display: flex;
    justify-content: ${(props: any) => props.justifyContent ? props.justifyContent : 'flex-start'}
`
export const DayWrapper = styled.div`
    height: 13px;
    width: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color:  ${(props: any) => props.month ? 'white' : '#60676c'};
`

//modal
export const Head = styled.div`
  height: 40px;
  display: flex;
  border-bottom: 1px solid black;
  justify-content: flex-start;
  align-items: center;
  & div{
   margin-left: 5px;
 }
`
export const ModalWrapper = styled.div`
    position:fixed;
    width: 420px;
    background: white;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    
    @media screen and (max-width: 600px) {
    width: 90vw;
    }
    
    @media screen and (max-width: 320px) {
    width: 99vw;
    }
`
export const ShowHideModal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  display:  ${(props: any) => props.show ? 'block' : 'none'};
`

//formik
export const FormikWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const FormikBlock = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    @media screen and (max-width: 600px) {
      width: 100%;
      align-items: center;
    }
`

export const FormikInnerBlock = styled.div`
    display: flex;
    flex-direction: row;
    margin: 5px 0 5px 0;
    & span {
      width: 100%;
      display: block;
      margin-right: 50px;
    }
    & input {
      display: block;
      width: 170px;;
      border: 1px solid black;
      border-radius: 5px;
    }
     @media screen and (max-width: 600px) {
      width: 100%;
      align-items: center;
      justify-content: center;
      & span {
        width: 30%;
        font-size: 10px;
        margin-left: 5px;
        margin-right: 5px;
      }
      & input {
        width: 188px;
        margin-right: 5px;
      }
    }
`
export const Error = styled.div`
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: -50px;
    right: 20px;
    color: red;
    
    @media screen and (max-width: 600px) {
      font-size: 10px;
      right: 37px;
    }
`