import React from 'react';
import './Week.css'

export const Week = () => {
    const DAYS_OF_THE_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const days = [...Array(7)]
    return <div className='week-block'>
        <div className='grid-body'>
            {DAYS_OF_THE_WEEK.map(d => {
                return <div className='grid-item'>
                    {d}
                </div>
            })}
            {days.map(d => {
                return <div className='grid-item'>
                    <div className='day-body'>
                        <div className='day-number'>1</div>
                        <div className='day-tasks'>
                            <div className='task-item'>
                                task 1
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
}
