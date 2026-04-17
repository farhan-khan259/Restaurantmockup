import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          Savory<span className={styles.accent}>Craft</span>
        </Link>

        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menu">
          <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ''}`}></span>
          <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ''}`}></span>
          <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ''}`}></span>
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <Link to="/" className={styles.navLink} onClick={closeMenu}>Home</Link>
          
<Link to="/products" className={styles.navLink} onClick={closeMenu}>Products</Link>
<Link to="/contact" className={styles.navLink} onClick={closeMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;