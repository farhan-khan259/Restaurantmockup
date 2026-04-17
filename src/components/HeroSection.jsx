import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg')`,
      }}
    >
      <div className={styles.overlay} />
      
      <div className={styles.content}>
        <h1 className={styles.brandName}>SavoryCraft</h1>
        <p className={styles.tagline}>
          Crafting Complete Food Experiences — Bespoke Cakes, Nigerian & Intercontinental Cuisine.
        </p>
        <Link to="/products" className={styles.cta}>
          Explore Our Menu
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
