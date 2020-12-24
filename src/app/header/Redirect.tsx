import React, {RefAttributes} from 'react';
import {useHistory} from 'react-router-dom';
import {Radio} from 'antd';
import {RadioGroupProps} from 'antd/lib/radio/interface';

export const Redirect = () => {

    let history = useHistory();

    // @ts-ignore
    let handleSizeChange = (e: IntrinsicAttributes & RadioGroupProps & RefAttributes<HTMLDivElement>) => {
        history.push(`/${e.target.value}`)
    };

    return <div>
        <Radio.Group onChange={handleSizeChange}>
            <Radio.Button value="month">Month</Radio.Button>
            <Radio.Button value="week">Week</Radio.Button>
            <Radio.Button value="day">Day</Radio.Button>
        </Radio.Group>
    </div>
}



