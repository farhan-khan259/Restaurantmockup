import ProductCard from './ProductCard';
import styles from './ProductGrid.module.css';

const ProductGrid = () => {
  const mockProducts = [
    {
      id: 1,
      title: 'Classic Tiered Wedding Cake',
      description: 'Elegant three-tier wedding cake with custom buttercream and sugar flowers.',
      price: '₦45,000 - ₦75,000',
      category: 'Bespoke Cake',
      image: 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg',
    },
    {
      id: 2,
      title: 'Chocolate Ganache Cake',
      description: 'Rich dark chocolate cake with creamy ganache filling and gold leaf accent.',
      price: '₦28,000 - ₦45,000',
      category: 'Dessert',
      image: 'https://images.pexels.com/photos/5632638/pexels-photo-5632638.jpeg',
    },
    {
      id: 3,
      title: 'Jollof Rice Platter',
      description: 'Traditional parboiled rice cooked in finest tomato and aromatic spices.',
      price: '₦8,000 - ₦15,000',
      category: 'Nigerian Dishes',
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg',
    },
    {
      id: 4,
      title: 'Egusi Soup with Fufu',
      description: 'Authentic egusi soup with choice of proteins and tender fufu portions.',
      price: '₦12,000 - ₦20,000',
      category: 'Nigerian Dishes',
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg',
    },
    {
      id: 5,
      title: 'Macaron Tower',
      description: 'Colorful French macarons stacked in an elegant display tower.',
      price: '₦22,000 - ₦35,000',
      category: 'Dessert',
      image: 'https://images.pexels.com/photos/3535633/pexels-photo-3535633.jpeg',
    },
    {
      id: 6,
      title: 'Golden Meat Pie Pack (12pc)',
      description: 'Flaky pastry with seasoned minced meat and spices, fresh from the oven.',
      price: '₦6,500 - ₦10,000',
      category: 'Small Chops',
      image: 'https://images.pexels.com/photos/821090/pexels-photo-821090.jpeg',
    },
    {
      id: 7,
      title: 'Springrolls Assorted (15pc)',
      description: 'Crispy spring rolls with vegetables and protein filling, perfectly golden.',
      price: '₦7,000 - ₦11,000',
      category: 'Small Chops',
      image: 'https://images.pexels.com/photos/3961954/pexels-photo-3961954.jpeg',
    },
    {
      id: 8,
      title: 'Lemon Drizzle Cake',
      description: 'Zesty lemon cake with a tangy glaze and fresh lemon curd filling.',
      price: '₦18,000 - ₦28,000',
      category: 'Dessert',
      image: 'https://images.pexels.com/photos/5632636/pexels-photo-5632636.jpeg',
    },
    {
      id: 9,
      title: 'Nigerian Pepper Soup (2L)',
      description: 'Aromatic pepper soup with assorted proteins and freshly ground spices.',
      price: '₦10,000 - ₦16,000',
      category: 'Nigerian Dishes',
      image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg',
    },
  ];

  return (
    <div className={styles.grid}>
      {mockProducts.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
