import { useEffect, useState } from "react";
import '../css/MyCalendar.css';

function DayBlock(props) {
    return(
        <div id="dayBlock">{props.date.getDate()}</div>
    );
}

function MyCalendar() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [selectedDate, setSelectedDate] = useState(new Date().getDate());
    const [selectedDay, setSelectedDay] = useState(new Date().getDay());
    const [monthName, setMonthName] = useState(months[selectedMonth]);
    const [dayName, setDayName] = useState(days[selectedDay]);

    return(
        <div id="calendar">
            <header className="header">
                <button>Today</button>
                <div id="selectedMonthYear">
                    <button>prev</button>
                    <h4 className="no-margin">{monthName} {selectedYear}</h4>
                    <button>next</button>
                </div>
            </header>
            <hr className="no-margin" />
            <main>
                <DayBlock date={new Date(selectedYear, selectedMonth, selectedDate)} day={dayName} />
            </main>
        </div>
    );
}

export default MyCalendar