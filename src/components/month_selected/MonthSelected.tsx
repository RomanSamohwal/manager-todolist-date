import React from 'react';
import './MonthSelected.css'

export const MonthSelected = () => {
    let months = ['Jun', 'Jul', 'Feb', 'Aug',
        'March', 'September', 'April', 'October',
        'May', 'November', 'January', 'December']

    return <div className='block'>
        <div>
            <button>today</button>
        </div>
        <div className='grid_wrapper'>
            {months.map(m => {
                return <div className='inner' onClick={() => {
                    alert(m)
                }}>
                    {m}
                </div>
            })}
        </div>
    </div>
}