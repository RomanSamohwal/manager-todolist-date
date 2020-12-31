import React from 'react';
import './Modal.css'
import styled from 'styled-components';
import {EventFormik} from './EventFormik';

export const ModalWrapper = styled.div`
    position:fixed;
    width: 420px;
    background: white;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    
    @media screen and (max-width: 600px) {
    width: 90vw;
    }
`

export const Modal = (props: any) => {
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";
    return <div className={showHideClassName}>
        <ModalWrapper>
            <div style={{height: '40px', display: 'flex',
                borderBottom: '1px solid black', justifyContent: 'flex-start' ,alignItems: 'center'}}>
                <div style={{marginLeft: '5px'}}>New event</div>
            </div>
            <EventFormik/>
        </ModalWrapper>
    </div>
}