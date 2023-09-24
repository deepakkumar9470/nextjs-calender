"use client";
import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./calender.css";
const MyCalendar = ({ events, handleEventAdd, toggleDrawer }) => {
  const [calendarEvents, setCalendarEvents] = useState([]);

  useEffect(() => {
    setCalendarEvents(events);
  }, [events]);
  

  const handleDateClick = (arg) => {
    const title = prompt("Event Title:");
    if (title) {
      const newEvent = {
        title,
        start_date: arg.date,
        end_date: arg.date,
      };
      handleEventAdd(newEvent);
    }
  };


  return (
   <div>
      <button className="addnewevent" onClick={toggleDrawer}>
        Add Event
      </button>
      <div className="calendar-container">
        
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={calendarEvents}
        header={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay"
        }}
        dateClick={handleDateClick}
      />
    </div>
   </div>
  );
};

export default MyCalendar;
