import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.brandName}>SavoryCraft</h1>
            <p className={styles.tagline}>
              Crafting Complete Food Experiences — Bespoke Cakes, Nigerian & Intercontinental Cuisine.
            </p>
            <Link to="/products" className={styles.ctaButton}>
              Explore Our Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className={styles.specialties}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Specialties</h2>
          <div className={styles.cardGrid}>
            {/* Bespoke Cakes Card */}
            <div className={styles.card}>
              <img
                src="https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Bespoke Cake"
                className={styles.cardImage}
              />
              <h3>Bespoke Cakes</h3>
              <p>Artistic wedding, birthday, and celebration cakes tailored to your theme.</p>
            </div>

            {/* Nigerian Dishes Card */}
            <div className={styles.card}>
              <img
                src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Nigerian Dishes"
                className={styles.cardImage}
              />
              <h3>Nigerian Dishes</h3>
              <p>Authentic jollof rice, egusi soup, small chops, and more.</p>
            </div>

            {/* Desserts & Small Chops Card */}
            <div className={styles.card}>
              <img
                src="https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Desserts & Small Chops"
                className={styles.cardImage}
              />
              <h3>Desserts & Small Chops</h3>
              <p>Mini pastries, puff‑puff, samosas, and sweet treats for any event.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className={styles.sustainability}>
        <div className={styles.container}>
          <div className={styles.sustainabilityGrid}>
            <div className={styles.sustainabilityLeft}>
              <span className={styles.leafIcon}>🌿</span>
              <h2>Sustainable & Thoughtful Catering</h2>
            </div>
            <div className={styles.sustainabilityRight}>
              <p>
                We source local, seasonal ingredients and use eco‑friendly packaging. Our commitment to reducing waste means you can celebrate with a clear conscience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <h2>Ready to elevate your event?</h2>
          <p>Let’s create a menu that wows.</p>
          <Link to="/contact" className={styles.ctaButtonOutline}>
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;