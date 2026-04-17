import styles from './SpecialtiesSection.module.css';

const SpecialtiesSection = () => {
  const specialties = [
    {
      id: 1,
      title: 'Bespoke Cakes',
      description:
        'Handcrafted custom cakes designed to perfection for your special moments. From elegant tiered designs to personalized creations.',
      image: 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg',
    },
    {
      id: 2,
      title: 'Nigerian Dishes',
      description:
        'Authentic Nigerian cuisine prepared with premium ingredients and traditional techniques. Jollof rice, soups, and signature main courses.',
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg',
    },
    {
      id: 3,
      title: 'Desserts & Small Chops',
      description:
        'Delightful petit fours, pastries, and bite-sized delicacies perfect for events. Freshly prepared with exquisite taste and presentation.',
      image: 'https://images.pexels.com/photos/3535633/pexels-photo-3535633.jpeg',
    },
  ];

  return (
    <section className={styles.specialties}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Specialties</h2>
          <p className={styles.subtitle}>
            Explore our curated selection of premium offerings
          </p>
        </div>

        <div className={styles.grid}>
          {specialties.map((specialty) => (
            <div key={specialty.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={specialty.image}
                  alt={specialty.title}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{specialty.title}</h3>
                <p className={styles.cardDescription}>{specialty.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
