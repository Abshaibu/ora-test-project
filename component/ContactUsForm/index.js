"use client";
import React, { useState } from 'react'
import styles from './ContactForm.module.css'

const ContactForm = () => {
    const [loading, setLoading] = useState(false)
    const [formData, setFormdata] = useState({
        first_name: '',
        last_name: '',
        email: '',
        message: ''
    })

    const handleSubmit = () => {
        console.log({formData})
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormdata(s => ({
            ...s,
            [name]: value
        }))
    }


  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
        if (true) {
          handleSubmit();
        }
      }}
    >
      <div>
        <label htmlFor="first_name">
          First name
          <input
            className={styles.input}
            name="first_name"
            id="first_name"
            placeholder="First name"
            value={formData.first_name}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="last_name">
          Last name
          <input
            className={styles.input}
            name="last_name"
            placeholder="Last name"
            id="last_name"
            value={formData.last_name}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <label htmlFor="email">
        Email
        <input
          className={styles.input}
          name="email"
          placeholder="Email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <textarea
        className={styles.input}
        id="messgae"
        name="message"
        placeholder="Please leave us a message and we will get back to you."
        onChange={handleInputChange}
        value={formData.message}
      ></textarea>
      <button type="submit" disabled={loading}>Submit {loading && <span className={styles.loader}></span>}</button>
    </form>
  );
}

export default ContactForm