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
            <Portal>
                <ModalWindow show = {show} hideModal = {hideModal}/>
            </Portal>
            <button type="button" onClick={showModal} >
                add event
            </button>
    </>
}
