import React from 'react';
import './Modal.css'
import {InputTime} from '../../components/input/InputTime';

export const EventFormik = () => {
    return <div className='formikWrapper'>
        <div className='formikBlock'>
            <div className='formikInnerBlock'>
                <span>Name</span>
                <div><input type="text"/></div>
            </div>
            <div className='formikInnerBlock'>
                <span>Description</span>
                <div><input type="text"/></div>
            </div>
            <div className='formikInnerBlock'>
                <span>Date</span>
                <div><input type="text"/></div>
            </div>
            <div className='formikInnerBlock'>
                <span>Time from</span>
                <InputTime/>
            </div>
            <div className='formikInnerBlock'>
                <span>Time to</span>
                    <InputTime/>
            </div>
        </div>
        <div className='formikBlockButton'>
            <button>Create</button>
        </div>
    </div>
}

