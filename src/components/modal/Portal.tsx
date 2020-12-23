import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

export const Portal = (props:any) => {
    const el = document.createElement('div')
    useEffect(() => {
        document.body.appendChild(el)
        return () => {
            document.body.removeChild(el)
        }
    })

    return ReactDOM.createPortal(props.children, el)
}
