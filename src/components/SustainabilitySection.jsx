import { FaLeaf } from 'react-icons/fa';
import styles from './SustainabilitySection.module.css';

const SustainabilitySection = () => {
  return (
    <section className={styles.sustainability}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <div className={styles.iconWrapper}>
            <FaLeaf className={styles.icon} />
          </div>
          <h2 className={styles.heading}>Sustainable & Thoughtful Catering</h2>
        </div>

        <div className={styles.rightColumn}>
          <p className={styles.description}>
            At SavoryCraft, sustainability is at the heart of everything we do. We partner with local farmers 
            and suppliers to source the freshest ingredients while supporting our community. Our eco-friendly 
            packaging minimizes environmental impact, and we actively work to reduce food waste through careful 
            planning and innovative practices. Every event catered by us reflects our commitment to culinary 
            excellence and environmental responsibility.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
