import React, {ChangeEvent} from 'react';
import './Input.css'
import styled from 'styled-components';

export const InputWrapper = styled.div`
    width: 170px;
    display: flex;
    justify-content: space-between;
    & div {
    background-color: white;
    display: inline-flex;
    border: 1px solid #ccc;
    color: #555;
    }
    & input {
    display: block;
    width: 80px;
    border: 1px solid black;
    color: #555;
    text-align: center;
    border-radius: 5px;
   }
}
`
export const InputTime = () => {

    let onHandlerHour = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
    }

    let onHandlerMinute = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
    }

    return <InputWrapper>
        <input type="number" min="0" max="23" placeholder="00" onChange={onHandlerHour}/>
        <input type="number" min="0" max="59" placeholder="00" onChange={onHandlerMinute}/>
    </InputWrapper>
}