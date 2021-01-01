import React from 'react';
import './Modal.css'
import {EventFormik} from './EventFormik';
import {Head, ModalWrapper, ShowHideModal} from '../styled/Styled';

export const Modal = (props: any) => {
    return <ShowHideModal
        // @ts-ignore
        show={props.show}>
        <ModalWrapper>
            <Head>
                <div>New event</div>
            </Head>
            <EventFormik/>
        </ModalWrapper>
    </ShowHideModal>
}
