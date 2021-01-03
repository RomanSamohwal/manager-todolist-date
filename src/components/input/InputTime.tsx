import React from 'react';
import './Input.css'
import {Input} from 'antd';

export const InputComponent = (props: any) => {

    return <Input id={props.id} name={props.name}
                  type={props.type} onChange={props.onChange}
                  value={props.value} placeholder={props.placeholder}
                  min = {props.min} max = {props.max}
    />
}