import React, { useState } from "react";
import DateCard from "./components/DateCard";

function Date() {
  const [dates, setDates] = useState([
    { date: "Sunday, Sep 29th", day: "Sunday", time: "2PM-4PM" },
    { date: "Monday, Sep 30th", day: "Monday", time: "10AM-12PM" },
    { date: "Tuesday, Oct 1st", day: "Tuesday", time: "1PM-3PM" },
  ]);

  const handleEdit = (index) => {
    const newTime = prompt("Enter the new time:", dates[index].time);
    if (newTime) {
      setDates((prev) =>
        prev.map((item, i) => (i === index ? { ...item, time: newTime } : item))
      );
    }
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this date?")) {
      setDates((prev) => prev.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="App">
      <h1>Date Cards</h1>
      <div className="date-cards-container">
        {dates.map((date, index) => (
          <DateCard
            key={index}
            date={date.date}
            day={date.day}
            time={date.time}
            onEdit={() => handleEdit(index)}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Date;
