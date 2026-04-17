import React from 'react';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Let's Create Something Memorable</h1>
        <p className={styles.subtitle}>Reach out to discuss your event — we'll craft a custom menu just for you.</p>

        <div className={styles.contentGrid}>
          {/* Contact Form */}
          <div className={styles.formCard}>
            <h2>Send a Message</h2>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Your name" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="you@example.com" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="eventType">Event Type</label>
                <select id="eventType">
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Corporate</option>
                  <option>Housewarming</option>
                  <option>Other</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Tell us about your vision..."></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>Send Inquiry</button>
            </form>
          </div>

          {/* Contact Info */}
          <div className={styles.infoCard}>
            <h2>Contact Information</h2>
            <div className={styles.infoItem}>
              <span className={styles.icon}>📞</span>
              <div>
                <h3>Phone</h3>
                <p>+234 123 456 7890</p>
                <p>+234 987 654 3210</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.icon}>✉️</span>
              <div>
                <h3>Email</h3>
                <p>hello@savorycraft.com</p>
                <p>events@savorycraft.com</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.icon}>📍</span>
              <div>
                <h3>Visit Us</h3>
                <p>15 Admiralty Way, Lekki Phase 1</p>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
            <div className={styles.hours}>
              <h3>Consultation Hours</h3>
              <p>Monday – Friday: 9am – 6pm</p>
              <p>Saturday: 10am – 4pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;