import React, { useState, useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = ({ onChange }) => {
    const [dates, setDates] = useState([]);
    const [showCalendar, setShowCalendar] = useState(false);
    const inputRef = useRef(null);
    const [totalDays, setTotalDays] = useState(0);

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

    const handleDateChange = (newDates) => {
        setDates(newDates);
        const days = newDates.length > 0 ? Math.ceil((newDates[newDates.length - 1] - newDates[0]) / (1000 * 60 * 60 * 24)) : 0;
        setTotalDays(days);

        const formattedDates = newDates.map(date => {
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');
            return `${year}-${month}-${day}`;
        });

        onChange(formattedDates);
    };

    const isPastDay = (date) => {
        const today = new Date();
        return date < today.setHours(0, 0, 0, 0);
    };

    return (
        <div>
            <label htmlFor="departureDate" className="form-label">Date</label>
            <div ref={inputRef}>
                <input
                    type="text"
                    value={dates.length > 0 ? `${dates[0].toLocaleDateString()} - ${dates[dates.length - 1].toLocaleDateString()} (${totalDays} days)` : ''}
                    onFocus={() => setShowCalendar(true)}
                    className="form-control"
                    readOnly
                />
                {showCalendar && (
                    <div style={{ position: 'absolute', zIndex: 1 }}>
                        <Calendar
                            onChange={handleDateChange}
                            value={dates}
                            selectRange={true}
                            tileClassName={({ date }) => (isPastDay(date) ? 'past-day' : '')}
                            tileDisabled={({ date }) => isPastDay(date)}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyCalendar;
