import React, {useState} from 'react';
import {Portal} from './Portal';
import './Modal.css'
import {ModalWindow} from './Window';
import {ButtonComponent} from '../button/Button';

export const ModalEvent = () => {

    let [show, setShow] = useState(false)

    const showModal = () => {
        setShow(true)
    };

    const hideModal = () => {
        setShow(false)
    };
    return <div>
        <ButtonComponent onHandle={showModal} name={'+ Add new'}/>
        <Portal>
            <ModalWindow show={show} hideModal={hideModal}/>
        </Portal>
    </div>
}
