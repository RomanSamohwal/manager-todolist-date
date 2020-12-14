import React from 'react';
import moment from 'moment'

export const Test = () => {
    moment.updateLocale('ru', {week: {dow: 1}})
    /*console.log('текущий месяц')
    console.log(moment().month())
    //начало месяца
    console.log('начало месяца')
    console.log(moment().startOf('month'))
    //конец месяца
    console.log('конец месяца')
    console.log(moment().endOf('month'))
    //начало недели
    const startDay = moment().startOf('month').startOf('week')
    console.log('начало недели')
    console.log(startDay)
    console.log('начало недели текущий месяц')
    console.log(startDay.format('M'))
    console.log('начало недели текущий год')
    console.log(startDay.format('Y'))
    //конец недели
    const endDay = moment().endOf('month').endOf('week')
    console.log('конец недели')
    console.log(endDay)
    //начало месяца с начала недели
    console.log('начало месяца с начала недели')
    console.log(moment().startOf('month').startOf('week'))
    //предыдущий месяц
    console.log('предыдущий месяц')
    let prevMonth = moment().startOf('month').subtract(1, 'month')
    console.log(prevMonth)
    //предыдущий месяц начало с понедельника
    console.log('предыдущий месяц начало с понедельника')
    console.log(prevMonth.startOf('week'))
    //следующий месяц
    console.log('следующий месяц')
    let nextMonth = moment().startOf('month').add(1, 'month')
    console.log(nextMonth)
    //следующий месяц начало с понедельника
    console.log('следующий месяц начало с понедельника')
    console.log(nextMonth.startOf('week'))

    //получаем месяц заданный нами
    console.log('test')
    let selectedMonth = moment().month('November').startOf('month')
    console.log(selectedMonth)
    console.log(selectedMonth.startOf('week'))
    //текущая неделя
    console.log('текущая неделя')
    //количество недель в году
    console.log(moment().week())//50
    console.log(moment().startOf('week'))
    console.log(moment().endOf('week'))
    //неделя начало недели
    let currentWeek = moment().startOf('week')
    console.log(currentWeek.format('D'))
    console.log(currentWeek.format('M'))
    console.log(currentWeek.format('Y'))
    //конец недели
    let currentWeek2 = moment().endOf('week')
    console.log(currentWeek2.format('D'))
    console.log(currentWeek2.format('M'))
    console.log(currentWeek2.format('Y'))
    //предыдущая неделя
    let prevWeek = moment().startOf('week')
    console.log('предыдущая неделя')
    console.log(prevWeek.subtract(1, 'week'))
    //количество недель
    console.log('количество недель')
    console.log(moment().weekday())//5
    //добавление дня
    console.log('добавление дня')
    const currDay = moment().startOf('month').startOf('week')
    const daysArray = [...Array(2)].map(() => currDay.add(1, 'day').clone())
    console.log(daysArray)
    //тест
    let calendar = moment().add(1, 'months').calendar();
    console.log(calendar)*/

    //найдем месяц июнь
   /* let selectedJun = moment().month(6).startOf('month').startOf('week')
    console.log(selectedJun)*/
    //test
 /*   const day = moment().startOf('month')
    console.log(day)
    console.log(day.weekday())//1 Tuesday
    let diffBetweenDay = 6 - (6 - day.weekday())
    console.log(diffBetweenDay)
    let prevMonth = day.clone().subtract(diffBetweenDay, 'day')
    console.log(prevMonth.startOf('week'))
    //найдем месяц июнь
    let selectedJun = moment().month('Jun').startOf('month')
    console.log(selectedJun)
    let diff = 7 - (6 - selectedJun.weekday())
    let prev = selectedJun.clone().subtract(diff, 'day')
    console.log(prev.startOf('week'))*/
    //найдем год
    let year = moment().year()//2020
    let yearCurrent = moment().startOf('year')//01 01 2020
    let prevYearStartMonday = yearCurrent.startOf('week')//30 12 2019
    console.log(year)
    console.log(yearCurrent)
    console.log(prevYearStartMonday)
    console.log(yearCurrent.format('M'))


    return <div>

    </div>
}/*  const day = moment().startOf('month')
    let diffBetweenDay = 6 - (6 - day.weekday())
    if(diffBetweenDay === 0){
        diffBetweenDay = 1
    }
    let month = day.clone().subtract(diffBetweenDay, 'day')
    let dayStart = month.startOf('week')*/