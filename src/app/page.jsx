"use client"
import MyCalendar from '@/components/MyCalendar';
import Sidebar from '@/components/Sidebar';


import { useState } from 'react';

export default function Home() {
  const [events, setEvents] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };


  const handleEventAdd = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <div>
      <div className="container">
        <div className="sidebar">
        <Sidebar 
        isOpen={isOpen}
        handleEventAdd={handleEventAdd}
        toggleDrawer={toggleDrawer} />
        </div>
        <div className="calenderContainer">
        <MyCalendar 
        events={events} 
        handleEventAdd={handleEventAdd}
        toggleDrawer={toggleDrawer} />

        </div>
      </div>
    </div>
  );
}
