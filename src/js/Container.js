import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../css/Container.css';
import MyCalendar from './MyCalendar';

function Container() {
    const [value, onChange] = useState(new Date());

    useEffect(() => {
        console.log(value);
    },[value]);

    return(
        <div id="container">
            <Calendar id="calendarSmall" onChange={onChange} value={value} minDate={new Date()} />
            <MyCalendar />
        </div>
    );
}

export default Container;