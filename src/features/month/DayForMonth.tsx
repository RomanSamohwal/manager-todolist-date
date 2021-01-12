import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../bll/store';
import {DayForMonthWrapper} from './Styled';
import {DayType} from '../../utils/typesEvent';
import {EventForMonth} from './EventForDay';
import React from 'react';

export const DayForMonth = (props: any) => {
    let days = useSelector<AppRootStateType>(state => state.days)

    return <DayForMonthWrapper>
        {  // @ts-ignore
            days.map((d: DayType) => {
                    if (d.date.year === +props.dayItem.format('Y') &&
                        d.date.month === +props.dayItem.format('M') &&
                        d.date.day === +props.dayItem.format('D')) {
                        return <EventForMonth id={d.id}/>
                    }
                }
            )}
    </DayForMonthWrapper>
}
