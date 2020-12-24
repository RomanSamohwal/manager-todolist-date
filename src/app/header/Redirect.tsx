import React from 'react';
import {useHistory} from 'react-router-dom';
import {Radio} from 'antd';

export const Redirect = () => {

    let history = useHistory();

    // @ts-ignore
    let handleSizeChange = e => {
        alert(e.target.value)
        history.push(`/${e.target.value}`)
    };

    return <div className='container'>
        <Radio.Group onChange={handleSizeChange}>
            <Radio.Button value="month">Month</Radio.Button>
            <Radio.Button value="week">Week</Radio.Button>
            <Radio.Button value="day">Day</Radio.Button>
        </Radio.Group>
    </div>
}



