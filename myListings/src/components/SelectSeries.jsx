import React, { useState } from "react";
import "../styles/selectSeries.css";

function SelectSeries({ onClick }) {
    const [selectedDate, setSelectedDate] = useState("");

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleSubmit = () => {
        onClick(selectedDate);  // Pass selected date to the parent component
    };

    return (
        <div className="select-series-container">
            <h3>Select Series</h3>
            <div className="dropdown">

                <select
                    id="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                >
                    <option value="">--Select Date--</option>
                    <option value="2024-12-10">December 10, 2024</option>
                    <option value="2024-12-15">December 15, 2024</option>
                    <option value="2024-12-20">December 20, 2024</option>
                    <option value="2024-12-25">December 25, 2024</option>
                </select>

            </div>
            OR

            <button className="select-series-btn">
                Add New Series
            </button>



        </div>
    );
}

export default SelectSeries;
