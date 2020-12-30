import React from 'react';
import { EventFormik } from './EventFormik';
import './Modal.css'
import styled from 'styled-components';

export const ModalWrapper = styled.div`
    position:fixed;
    min-width: 35vw;
    background: white;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
`

export const Modal = (props: any) => {
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";
    return <div className={showHideClassName}>
        <ModalWrapper>
            <div style={{minHeight: '10vh'}}>New event</div>
            <EventFormik/>
        </ModalWrapper>
    </div>
}