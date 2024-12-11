import React from "react";

function DateCard({ date, day, time, onEdit, onDelete, onAddDate }) {
    return (
        <div className="date-card">
            <h3>{day} - {date}</h3>
            <p>Time: {time}</p>
            <button className="edit-btn" onClick={onEdit}>Edit</button>
            <button className="delete-btn" onClick={onDelete}>Delete</button>
            <button className="add-date-btn" onClick={onAddDate}>
                + Add Date
            </button>
        </div>
    );
}

export default DateCard;
