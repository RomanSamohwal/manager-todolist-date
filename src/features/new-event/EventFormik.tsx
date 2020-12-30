import React from 'react';
import './Modal.css'
import {ButtonComponent} from '../../components/button/Button';


export const EventFormik = () => {
    return <div className='formikWrapper'>
        <div className='formikBlock'>
            <div className='formikInnerBlock'>
                <span>Name</span> <div><input type="text"/></div>
            </div>
            <div className='formikInnerBlock'>
                <span>Description</span><div><input type="text"/></div>
            </div>
            <div className='formikInnerBlock'>
                <span>Date</span><div><input type="text"/></div>
            </div>
            <div className='formikInnerBlock'>
                <span>Time from</span>
                <div className = 'formikInnerBlockTime'>
                    <input type='number' max={60} min={0}/>
                    <input type='number' max={60} min={0}/>
                </div>
            </div>
            <div className='formikInnerBlock'>
                <span>Time to</span>
                <div className = 'formikInnerBlockTime'>
                    <input type='number' max={60} min={0}/>
                    <input type='number' max={60} min={0}/>
                </div>
            </div>
        </div>
    <div className='formikBlockButton'><button>Create</button></div>
    </div>
}


/*
<div className='container-row'><span>New event</span></div>
<div className='container-row'><span>Name</span><input type="text"/></div>
<div className='container-row'><span>Description</span><input type="text"/></div>
<div className='container-row'><span>Date</span><input type="text"/></div>
<div className='container-row'><span>Time from</span>
    <div className='container-time'>
        <input type='number' max={60} min={0}/>
        <input type='number' max={60} min={0}/>
    </div>
</div>
<div className='container-row'><span>Time from</span>
    <div className='container-time'>
        <input type='number' max={60} min={0}/>
        <input type='number' max={60} min={0}/>
    </div>
</div>
<div className='container-row'><span>Error</span>
    <button onClick={() => {
    }}>create
    </button>
</div>*/
