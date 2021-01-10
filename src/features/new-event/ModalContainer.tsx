import React, {useState} from 'react';
import {ButtonComponent} from '../../components/button/Button';
import {Portal} from '../../components/portal/Portal';
import {Modal} from './Modal';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../bll/store';

export const ModalContainer = () => {

    let [show, setShow] = useState<boolean>(false)
    const status = useSelector<AppRootStateType>(state => state.app.status)

    if (status === 'succeeded') {
        setShow(false)
    }

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