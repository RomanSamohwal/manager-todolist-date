import styled from 'styled-components';

export const InputBlock = styled.div`
    display: block;
    width: 170px;;
    border-radius: 5px;
    @media screen and (max-width: 600px) {
      width: 188px;
      margin-right: 5px;
    }
`

export const InputTimeWrapper = styled.div`
    width: 170px;
    display: flex;
    justify-content: space-between;
    & input {
    display: block;
    text-align: center;
   }
   @media screen and (max-width: 600px) {
     width: 188px;
     & input {
      width: 98px;
      margin-right: 20px
     }
   }
}
`