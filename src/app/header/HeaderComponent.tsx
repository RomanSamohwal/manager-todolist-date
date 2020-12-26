import React from 'react';
import {Redirect} from './Redirect';
import {ModalEvent} from '../../components/modal/Modal';
import {SelectContainer} from '../../components/select/SelectContainer';
import styled from 'styled-components';

const Header = styled.div`
   display: flex;
   justify-content: space-between;
   margin: 5px;
`

export const HeaderComponent = (props: any) => {

    return <Header>
            <Redirect/>
            <SelectContainer
                setPrevWeek={props.setPrevWeek}
                setNextWeek={props.setNextWeek}
                setPrevMonth={props.setPrevMonth}
                setNextMonth={props.setNextMonth}
                currentMonth={props.currentMonth}
            />
            <ModalEvent/>
        </Header>
}