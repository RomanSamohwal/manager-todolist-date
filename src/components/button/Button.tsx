import React from 'react';

type ButtonType = {
    direction: string
}

export const Button = (props: ButtonType) => {
    return <div>
        <button onClick={() => {}}>{props.direction}</button>
    </div>
}