import React from 'react';
import {Button} from 'antd';

type ButtonType = {
    name: string
    onHandle: () => void
}

export const ButtonComponent = (props: ButtonType) => {
    return <Button onClick={props.onHandle}>{props.name}</Button>
}