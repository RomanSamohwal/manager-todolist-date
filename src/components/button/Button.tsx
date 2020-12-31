import React from 'react';
import {Button} from 'antd';

type ButtonType = {
    name: string
    onHandle?: () => void
    htmlType?: "button" | "submit" | "reset" | undefined
}

export const ButtonComponent = (props: ButtonType) => {
    return <Button onClick={props.onHandle} htmlType ={props.htmlType}>{props.name}</Button>
}