import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import "./DatePicker.css";

const DatePicker = () => {
  const [dateRange, setDateRange] = useState("Feb 9th to Feb 15th");

  return (
    <div className="date-picker">
      <FaCalendarAlt className="calendar-icon" />
      <span>{dateRange}</span>
      <span className="dropdown-arrow">▼</span>
    </div>
  );
};

export default DatePicker;


.date-picker {
  display: flex;
  align-items: center;
  background: white;
  padding: 10px 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  font-size: 14px;
  cursor: pointer;
  width: fit-content;
}

.calendar-icon {
  margin-right: 8px;
  color: gray;
}

.dropdown-arrow {
  margin-left: auto;
  color: gray;
  font-size: 12px;
}











import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCalendarAlt } from "react-icons/fa";
import "./DatePicker.css";

const DatePicker = () => {
  const [dateRange, setDateRange] = useState("Loading...");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/date-range")
      .then((response) => {
        const { startDate, endDate } = response.data;
        setDateRange(`${formatDate(startDate)} to ${formatDate(endDate)}`);
      })
      .catch((error) => {
        console.error("Error fetching date range:", error);
        setDateRange("Error fetching date");
      });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", { month: "short", day: "numeric" });
  };

  return (
    <div className="date-picker">
      <FaCalendarAlt className="calendar-icon" />
      <span>{dateRange}</span>
      <span className="dropdown-arrow">▼</span>
    </div>
  );
};

export default DatePicker;
