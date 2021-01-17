import {DayForMonthWrapper} from './Styled';
import {DayType} from '../../utils/typesEvent';
import {EventForMonth} from './EventForDay';
import React from 'react';

export const DayForMonth: React.FC = (props: any) => {
    return <DayForMonthWrapper>
        {  // @ts-ignore
            props.days.map((d: DayType) => {
                    if (d.date.year === +props.dayItem.format('Y') &&
                        d.date.month === +props.dayItem.format('M') &&
                        d.date.day === +props.dayItem.format('D')) {
                        return <EventForMonth id={d.id} isWeek={props.isWeek}/>
                    }
                }
            )}
    </DayForMonthWrapper>
}
