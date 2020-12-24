import React from 'react';
import './ModalWindow.css'

export const ModalWindow = (props: any) => {
    const showHideClassName =   props.show ? "modal display-block" : "modal display-none";
    return <div className={showHideClassName}>
        <div className='container'>
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
                <button onClick={props.hideModal}>create</button></div>
        </div>
    </div>
}

