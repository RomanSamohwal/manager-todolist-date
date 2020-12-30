import React from 'react';
import {Redirect} from './Redirect';
import {SelectContainer} from '../../components/select/SelectContainer';
import styled from 'styled-components';
import { ModalContainer } from '../../features/new-event/ModalContainer';

const Header = styled.div`
   display: flex;
   justify-content: space-between;
   margin: 5px;
`

export const HeaderComponent = (props: any) => {

    return <Header>
        <Redirect/>
        <SelectContainer
            dayCurrent={props.dayCurrent}
            setPrevDay={props.setPrevDay}
            setNextDay={props.setNextDay}
            setPrevWeek={props.setPrevWeek}
            setNextWeek={props.setNextWeek}
            setPrevMonth={props.setPrevMonth}
            setNextMonth={props.setNextMonth}
            monthCurrent={props.monthCurrent}
            weekCurrent={props.weekCurrent}
        />
        <ModalContainer/>
    </Header>
}