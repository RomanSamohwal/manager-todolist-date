import React, {useState} from 'react';
import {Portal} from './Portal';
import './Modal.css'
import { ModalWindow } from './Window';

export const ModalEvent = () => {

    let [show, setShow] = useState(false)

    const showModal = () => {
        setShow(true)
    };

    const hideModal = () => {
        setShow(false)
    };
    return <>
        <main>
            <h1>
                Hello
            </h1>
            <Portal>
                <ModalWindow show = {show}/>
                {/*<Window show = {show}/>*/}
            </Portal>
            <button type="button" onClick={showModal}>
                open
            </button>
        </main>
    </>
}
