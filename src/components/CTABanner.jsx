import { Link } from 'react-router-dom';
import styles from './CTABanner.module.css';

const CTABanner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Ready to elevate your event?</h2>
          <p className={styles.subtext}>Let's create a menu that wows.</p>
          <Link to="/contact" className={styles.button}>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
