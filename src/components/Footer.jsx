import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>About SavoryCraft</h3>
            <p className={styles.aboutText}>
              Full‑service catering and bespoke event cakes. We deliver complete food experiences with a sustainable approach—locally sourced, eco‑friendly, and unforgettable.
            </p>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li><Link to="/" className={styles.link}>Home</Link></li>
              <li><Link to="/products" className={styles.link}>Products</Link></li>
              <li><Link to="/contact" className={styles.link}>Contact</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Contact Us</h3>
            <ul className={styles.contactList}>
              <li>hello@savorycraft.com</li>
              <li>+234 123 456 7890</li>
              <li>Lekki, Lagos, Nigeria</li>
            </ul>
            <div className={styles.socialIcons}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest"><FaPinterestP /></a>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} SavoryCraft. All rights reserved. | Sustainable Catering</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;