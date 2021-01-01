import styled from 'styled-components';

export const InnerBlock = styled.div`
    display: block;
    width: 170px;;
    border-radius: 5px;
    @media screen and (max-width: 600px) {
      width: 188px;
      margin-right: 5px;
    }
`

export const InputWrapper = styled.div`
    width: 170px;
    display: flex;
    justify-content: space-between;
   /* border: 1px solid green;*/
    & input {
    display: block;
    /*width: 80px;*/
    text-align: center;
   /* border-radius: 5px;*/
   }
   @media screen and (max-width: 600px) {
     width: 188px;
   }
}
`