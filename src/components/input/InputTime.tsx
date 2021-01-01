import React, {ChangeEvent} from 'react';
import './Input.css'
import {Input} from 'antd';
import {InnerBlock, InputWrapper} from '../button/styled';


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



export const InputComponent = (props: any) => {

    return <InnerBlock>
        <Input id={props.id} name={props.name}
               type={props.type} onChange={props.onChange}
               value={props.value}
        />
    </InnerBlock>
}