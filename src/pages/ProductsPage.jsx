import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import styles from './ProductsPage.module.css';

const products = [
  {
    id: 1,
    name: 'Signature Wedding Cake',
    description: 'Three‑tier vanilla bean cake with Swiss meringue buttercream.',
    price: 'From ₦150,000',
    image: 'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'cakes',
  },
  {
    id: 2,
    name: 'Jollof Rice & Chicken',
    description: 'Smoky party jollof served with fried plantain and grilled chicken.',
    price: '₦5,500 per plate',
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&auto=format&fit=crop',
    category: 'nigerian',
  },
  {
    id: 3,
    name: 'Assorted Small Chops',
    description: 'Spring rolls, samosas, puff‑puff, and chicken skewers.',
    price: '₦12,000 per dozen',
    image: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'desserts',
  },
  {
    id: 4,
    name: 'Egusi Soup & Pounded Yam',
    description: 'Rich melon seed soup with assorted meat and fish.',
    price: '₦7,000 per portion',
    image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=600&auto=format&fit=crop',
    category: 'nigerian',
  },
  {
    id: 5,
    name: 'Mini Cheesecake Bites',
    description: 'Velvety cheesecake with seasonal fruit topping.',
    price: '₦8,500 per dozen',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&auto=format&fit=crop',
    category: 'desserts',
  },
  {
    id: 6,
    name: 'Geometric Fondant Cake',
    description: 'Modern design with gold leaf accents.',
    price: 'From ₦120,000',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop',
    category: 'cakes',
  },
];

const ProductsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts = activeFilter === 'all'
    ? products
    : products.filter(p => p.category === activeFilter);

  return (
    <div className={styles.productsPage}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Our Culinary Creations</h1>
        <p className={styles.subtitle}>From bespoke cakes to authentic Nigerian cuisine</p>

        <div className={styles.filterBar}>
          <button
            className={`${styles.filterPill} ${activeFilter === 'all' ? styles.active : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button
            className={`${styles.filterPill} ${activeFilter === 'cakes' ? styles.active : ''}`}
            onClick={() => setActiveFilter('cakes')}
          >
            Cakes & Desserts
          </button>
          <button
            className={`${styles.filterPill} ${activeFilter === 'nigerian' ? styles.active : ''}`}
            onClick={() => setActiveFilter('nigerian')}
          >
            Nigerian Cuisine
          </button>
        </div>

        <div className={styles.productGrid}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;