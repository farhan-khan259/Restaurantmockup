import styles from './ElegantProductCard.module.css';

const ElegantProductCard = ({ image, title, description, price, category }) => {
  return (
    <div className={styles.card}>
      {category && <span className={styles.badge}>{category}</span>}
      
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.footer}>
          <p className={styles.price}>{price}</p>
          <button className={styles.viewButton}>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ElegantProductCard;
