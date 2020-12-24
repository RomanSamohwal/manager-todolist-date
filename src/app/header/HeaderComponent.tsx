import React from 'react';
import {Redirect} from './Redirect';
import {ModalEvent} from '../../components/modal/Modal';
import {SelectContainer} from '../../components/select/SelectContainer';
import styled from 'styled-components';
import {ContentComponent} from '../content/ContentComponent';

const Header = styled.div`
   display: flex;
   justify-content: space-between;
   margin: 5px;
`

export const HeaderComponent = () => {
    return <>
        <Header>
            <Redirect/>
            <SelectContainer/>
            <ModalEvent/>
        </Header>
        <ContentComponent/>
    </>
}