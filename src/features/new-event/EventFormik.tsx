import React from 'react';
import './Modal.css'
import {InputTime, InputWrapper} from '../../components/input/InputTime';
import { useFormik } from 'formik';

let leap_year = !/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/

export const EventFormik = () => {

    const formik = useFormik({
        initialValues: initialValues,
        validate: validate,
        onSubmit: (values : any) => {
            console.log(values)
        },
    })
    return <form onSubmit={formik.handleSubmit}>
        <div className='formikWrapper'>
            <div className='formikBlock'>
                <div className='formikInnerBlock'>
                    <span>Name</span>
                    <div>
                        <input id ='name' name='name'
                               type="text"
                               onChange={formik.handleChange}
                               value={formik.values.name}/>
                        {formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                    </div>
                </div>
                <div className='formikInnerBlock'>
                    <span>Description</span>
                    <div>
                        <input id='description' name='description'
                               type="text" onChange={formik.handleChange}
                               value={formik.values.description}/>
                        {formik.errors.description ? <div className='error'>{formik.errors.description}</div> : null}
                    </div>
                </div>
                <div className='formikInnerBlock'>
                    <span>Date</span>
                    <div>
                        <input type="text" id='date' name='date'
                               onChange={formik.handleChange}
                               placeholder={'01/01/2021'}
                               value={formik.values.date}
                    />
                        {formik.errors.date ? <div className='error'>{formik.errors.date}</div> : null}
                    </div>
                </div>
                <div className='formikInnerBlock'>
                    <span>Time from</span>
                    <InputWrapper>
                        <input id = 'timeFromHour'  name = 'timeFromHour'  type="number" min="0" max="23"
                               placeholder="00" onChange={formik.handleChange}
                               value={formik.values.timeFromHour}
                        />
                        {formik.errors.timeFromHour ? <div className='error'>{formik.errors.timeFromHour}</div> : null}
                        <input
                            id = 'timeFromMinute'  name = 'timeFromMinute'
                            type="number" min="0" max="59"
                               placeholder="00" onChange={formik.handleChange}
                               value={formik.values.timeFromMinute}
                        />
                        {formik.errors.timeFromMinute ? <div className='error'>{formik.errors.timeFromMinute}</div> : null}
                    </InputWrapper>
                </div>
                <div className='formikInnerBlock'>
                    <span>Time to</span>
                    <InputWrapper>
                        <input id = 'timeToHour'  name = 'timeToHour'  type="number" min="0" max="23"
                               placeholder="00" onChange={formik.handleChange}
                               value={formik.values.timeToHour}
                        />
                        {formik.errors.timeToHour ? <div className='error'>{formik.errors.timeToHour}</div> : null}
                        <input
                            id = 'timeToMinute'  name = 'timeToMinute'
                            type="number" min="0" max="59"
                            placeholder="00" onChange={formik.handleChange}
                            value={formik.values.timeToMinute}

                        />
                        {formik.errors.timeToMinute ? <div className='error'>{formik.errors.timeToMinute}</div> : null}
                    </InputWrapper>
                </div>
            </div>
            <div className='formikBlockButton'>
                <button type='submit'>Create</button>
            </div>
        </div>
    </form>
}

//initial value
const initialValues = {
    name: '',
    description: '',
    date: '',
    timeFromHour: '00',
    timeFromMinute: '00',
    timeToHour: '00',
    timeToMinute: '00',
}

//validate
let validate = (values: any) => {
    if (!values.name) {
        return {
            name: 'name is required'
        }
    }

    if (values.name.length > 10) {
        return {
            name: 'the length must be less than 10 characters'
        }
    }

    if (!values.description) {
        return {
            name: 'description is required'
        }
    }
    if (!/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(values.date)) {
        return {
            date: 'match the requested format'
        }
    }

    if (values.timeFromHour > 23 || values.timeToHour > 23) {
        return {
            timeToHour: 'values must be less than 23 or equal to 23',
            timeFromHour: 'values must be less than 23 or equal to 23'
        }
    }
    if (values.timeToMinute > 60 || values.timeToMinute < 0 || values.timeFromMinute > 60 || values.timeFromMinute < 0) {
        return {
            timeToHour: 'values must be less than 60 or equal to 60',
            timeFromHour: 'values must be less than 60 or equal to 60'
        }
    }
}
