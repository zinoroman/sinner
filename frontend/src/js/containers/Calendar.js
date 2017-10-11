import React from 'react';
import { DateRange } from 'react-date-range';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { loadSinsByDate } from '../actions/'


class Calendar extends React.Component{
    handleSelect(range){
        console.log(range);
    }
    viewSinsByDate(){
        this.props.loadSinsByDate();
        console.log('sfdd')
    }
    render(){
        let date = new Date();
        const today = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`; 
        return (
            <div>
                <h1>
                    Перегляд по даті
                </h1>
                <DateRange
                    onChange={this.handleSelect}
                    firstDayOfWeek={1}
                    maxDate={today}
                    theme={calendarTheme}
                />
                <Link to='/calendar/sins' 
                      className ='add-sins__submit'
                      onClick={this.viewSinsByDate}>Показати</Link>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadSinsByDate: (dayFrom, monthFrom, yearFrom, dayTill, monthTill, yearTill) => {
            dispatch(loadSinsByDate(dayFrom, monthFrom, yearFrom, dayTill, monthTill, yearTill))
        },
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Calendar)

const calendarTheme = {
    DateRange: {
        background: '#000',
        border: '1px solid #e22d22',
        width: '562px',
        marginBottom: '30px'
    },
    Calendar: {
        background: 'transparent',
        color: '#95a5a6',
    },
    MonthAndYear: {
        background: '#111',
        color: '#fff',
        border: '1px solid #e22d22'
    },
    MonthButton: {
        background: '#e22d22'
    },
    MonthArrowPrev: {
        borderRightColor: '#000',
    },
    MonthArrowNext: {
        borderLeftColor: '#000',
    },
    Weekday: {
        background: '#e74c3c',
        color: '#9e3024'
    },
    Day: {
        transition: 'transform .1s ease, box-shadow .1s ease, background .1s ease'
    },
    DaySelected: {
        background: '#8e44ad'
    },
    DayActive: {
        background: '#8e44ad',
        boxShadow: 'none'
    },
    DayInRange: {
        background: '#9b59b6',
        color: '#fff'
    },
    DayHover: {
        background: '#ffffff',
        color: '#7f8c8d',
        transform: 'scale(1.1) translateY(-10%)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)'
    }
}
