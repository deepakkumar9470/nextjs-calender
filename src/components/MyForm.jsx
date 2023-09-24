"use client";
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./sidebar.module.css";

const initialValues = {
  title: "",
  start_date: "",
  end_date: "",
};

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  start_date: Yup.date().required("Start Date is required"),
  end_date: Yup.date().required("End Date is required"),
});

const MyForm = () => {
  const [formData, setFormData] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (values, { resetForm }) => {
    if (formData.title && formData.start_date && formData.end_date) {
      handleEventAdd(formData);
      setFormData([]);
    }

    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnChange={handleChange}
    >
      <Form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title">title</label>
          <Field
            type="text"
            name="title"
            id="title"
            placeholder="Enter title"
          />
          <ErrorMessage name="title" component="div" className="error" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="start_date">Start Date</label>
          <Field 
            type="date" 
            id="start_date"
            name="start_date" />
          <ErrorMessage name="start_date" component="div" className="error" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="end_date">End Date</label>
          <Field 
          type="date" 
          id="end_date"
          name="end_date" />
          <ErrorMessage name="end_date" component="div" className="error" />
        </div>

        <button className={styles.addevent} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default MyForm;
