import React, {useState} from 'react';
import {ButtonComponent} from '../../components/button/Button';
import {Portal} from '../../components/portal/Portal';
import {Modal} from './Modal';
/*import './Modal.css'*/

export const ModalContainer = () => {

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
            <Modal show={show} hideModal={hideModal}/>
        </Portal>
    </div>
}