import React, { useState, useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = () => {
    const [dates, setDates] = useState([]);
    const [showCalendar, setShowCalendar] = useState(false);
    const inputRef = useRef(null);
    const [totalDays, setTotalDays] = useState(0);

    const onChange = (newDates) => {
        setDates(newDates);
        const days = newDates.length > 0 ? Math.ceil((newDates[newDates.length - 1] - newDates[0]) / (1000 * 60 * 60 * 24)) : 0;
        setTotalDays(days);
    };

    const handleClickOutside = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            setShowCalendar(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <label htmlFor="departureDate" className="form-label">Date</label>
            <div ref={inputRef}>
                <input
                    type="text"
                    value={dates.length > 0 ? `${dates[0].toDateString()} - ${dates[dates.length - 1].toDateString()} (${totalDays} days)` : ''}
                    onFocus={() => setShowCalendar(true)}
                    className="form-control"
                    readOnly
                />
                {showCalendar && (
                    <div style={{ position: 'absolute', zIndex: 1 }}>
                        <Calendar
                            onChange={onChange}
                            value={dates}
                            selectRange={true}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyCalendar;