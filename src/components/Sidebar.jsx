"use client"
import React, { useState } from 'react';
import styles from './sidebar.module.css'
import MyForm from './MyForm';
const Sidebar = ({ handleEventAdd,isOpen,toggleDrawer }) => {
  
  const [formData, setFormData] = useState({
    title: '',
    start: '',
    end: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.start && formData.end) {
      handleEventAdd(formData);
      setFormData({
        title: '',
        start: '',
        end: '',
      });
      toggleDrawer(null)

    }
  };

  return   (
    <div className={`${styles.sideDrawer} ${isOpen ? styles.open : ''}`}>
      <h2>Add Event</h2>
      <button className={styles.close} onClick={toggleDrawer}>X</button>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button className={styles.close} onClick={toggleDrawer}>X</button>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
          />
        </div>
        <div  className={styles.formGroup}>
          <label htmlFor="start">Start Time:</label>
          <input
          className={styles.input}
            type="datetime-local"
            id="start"
            name="start"
            value={formData.start}
            onChange={handleChange}
          />
        </div>
        <div  className={styles.formGroup}>
          <label htmlFor="end">End Time:</label>
          <input
          className={styles.input}
            type="datetime-local"
            id="end"
            name="end"
            value={formData.end}
            onChange={handleChange}
          />
        </div>
        <button className={styles.addevent} type="submit">Add Event</button>
      </form>
      {/* <MyForm handleEventAdd={handleEventAdd}/> */}
    </div>
    
  )

};

export default Sidebar;
