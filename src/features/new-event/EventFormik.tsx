import React from 'react';
import './Modal.css'
import {InputComponent} from '../../components/input/InputTime';
import {useFormik} from 'formik';
import {ButtonComponent} from '../../components/button/Button';
import {Error, FormikBlock, FormikInnerBlock, FormikWrapper} from '../styled/Styled';
import {InputBlock, InputTimeWrapper} from '../../components/button/styled';
import {AppRootStateType, useAppDispatch} from '../../bll/store';
import {addDayTC} from '../../bll/day-reducer';
import {addEventTS, deleteError} from '../../bll/event-reducer';
import {DataType} from '../../utils/createEventOfDay';
import {useSelector} from 'react-redux';

export const EventFormik = () => {
    const dispatch = useAppDispatch()
    const error = useSelector<AppRootStateType>(state => state.events.error)

    if (error) {
        setTimeout(() => {
            dispatch(deleteError())
        }, 1500)
    }

    const formik = useFormik({
        initialValues: {} as InitValueType,
        validate: validate,
        onSubmit: (values: InitValueType) => {
            let data: DataType = {
                timeFromHour: values.timeFromHour || 0,
                timeFromMinute: values.timeFromMinute || 0,
                timeToHour: values.timeToHour || 0,
                timeToMinute: values.timeToMinute || 0,
                name: values.name,
                description: values.description
            }
            dispatch(addDayTC({date: values.date}))
            dispatch(addEventTS({data, idDate: values.date}))
        }
    })

    return <form onSubmit={formik.handleSubmit}>
        <FormikWrapper>
            <FormikBlock>
                <FormikInnerBlock>
                    <span>Name</span>
                    <InputBlock>
                        <InputComponent id={'name'} name={'name'}
                                        type={'text'} onChange={formik.handleChange}
                                        value={formik.values.name}/>
                        {formik.errors.name ? <Error>{formik.errors.name}</Error> : null}
                    </InputBlock>
                </FormikInnerBlock>
                <FormikInnerBlock>
                    <span>Description</span>
                    <InputBlock>
                        <InputComponent id={'description'} name={'description'}
                                        type={'text'} onChange={formik.handleChange}
                                        value={formik.values.description}/>
                        {formik.errors.description ? <Error>{formik.errors.description}</Error> : null}
                    </InputBlock>
                </FormikInnerBlock>
                <FormikInnerBlock>
                    <span>Date</span>
                    <InputBlock>
                        <InputComponent type={'text'} id={'date'} name={'date'}
                                        onChange={formik.handleChange}
                                        placeholder={'01/01/2021'}
                                        value={formik.values.date}/>
                        {formik.errors.date ? <Error>{formik.errors.date}</Error> : null}
                    </InputBlock>
                </FormikInnerBlock>
                <FormikInnerBlock>
                    <span>Time from</span>
                    <InputTimeWrapper>
                        <InputComponent
                            id={'timeFromHour'} name={'timeFromHour'} type={'number'} min={'0'} max={'23'}
                            placeholder={'00'} onChange={formik.handleChange}
                            value={formik.values.timeFromHour}
                        />
                        {formik.errors.timeFromHour ? <Error>{formik.errors.timeFromHour}</Error> : null}
                        <InputComponent
                            id={'timeFromMinute'} name={'timeFromMinute'}
                            type={'number'} min={'0'} max={'59'}
                            placeholder={'00'} onChange={formik.handleChange}
                            value={formik.values.timeFromMinute}
                        />
                        {formik.errors.timeFromMinute ?
                            <Error>{formik.errors.timeFromMinute}</Error> : null}
                    </InputTimeWrapper>
                </FormikInnerBlock>
                <div className='formikInnerBlock'>
                    <span>Time to</span>
                    <InputTimeWrapper>
                        <InputComponent id={'timeToHour'} name={'timeToHour'} type={'number'} min={'0'} max={'23'}
                                        placeholder={'00'} onChange={formik.handleChange}
                                        value={formik.values.timeToHour}
                        />
                        {formik.errors.timeToHour ? <Error>{formik.errors.timeToHour}</Error> : null}
                        <InputComponent
                            id={'timeToMinute'} name={'timeToMinute'}
                            type={'number'} min="0" max={'59'}
                            placeholder={'00'} onChange={formik.handleChange}
                            value={formik.values.timeToMinute}
                        />
                        {formik.errors.timeToMinute ? <Error>{formik.errors.timeToMinute}</Error> : null}
                        {error ? <Error>{String(error)}</Error> : null }
                    </InputTimeWrapper>
                </div>
            </FormikBlock>
            <div className='formikBlockButton'>
                <ButtonComponent name={'create'} htmlType={'submit'}/>
            </div>

        </FormikWrapper>
    </form>
}

//validate
let validate = (values: InitValueType) => {
    if (!values.name) {
        return {
            name:message_0
        }
    }
    if (values.name.length > 10) {
        return {
            name: message_1
        }
    }
    if (!values.description) {
        return {
            name: message_2
        }
    }
    if (values.description.length > 15) {
        return {
            description: message_3
        }
    }
    if (!/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(values.date)) {
        return {
            date: message_4
        }
    }
    if (values.timeFromHour > 23 || values.timeToHour > 23) {
        return {
            timeToHour: message_5,
            timeFromHour: message_5
        }
    }
    if (values.timeToMinute > 60 || values.timeToMinute < 0 || values.timeFromMinute > 60 || values.timeFromMinute < 0) {
        return {
            timeToHour: message_6,
            timeFromHour: message_6
        }
    }
    if (values.timeToHour < values.timeFromHour) {
        return {
            timeToHour: message_7,
            timeFromHour: message_7
        }
    }
    if (values.timeToHour === values.timeFromHour && values.timeToMinute === values.timeFromMinute) {
        return {
            timeToHour: message_8,
            timeFromHour: message_8,
            timeToMinute: message_8,
            timeFromMinute: message_8
        }
    }
    if ( values.timeToMinute < values.timeFromMinute) {
        return {
            timeToMinute: message_9,
            timeFromMinute: message_9
        }
    }
}

//type
export type InitValueType = {
    date: string
    description: string
    name: string
    timeFromHour: number
    timeFromMinute: number
    timeToHour: number
    timeToMinute: number
}
//messages
const message_0 = 'name is required'
const message_1 = 'the length must be less than 10 characters'
const message_2 = 'description is required'
const message_3 = 'the length must be less than 15 characters'
const message_4 = 'match the requested format'
const message_5 = 'values must be less than 23 or equal to 23'
const message_6 = 'timeToHour must be more than timeFromHour'
const message_7 = 'timeToHour must be more than timeFromHour'
const message_8 = 'the event must be at least 1 minute'
const message_9 = 'timeToMinute must be more than timeFromMinute'