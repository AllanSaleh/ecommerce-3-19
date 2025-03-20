import { Product } from '../../types/types';
import './ProductCard.css';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className='product-card'>
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <img src={product.image} alt={product.title} className='product-image' />
      <p>{product.description}</p>
    </div>
  );
};
export default ProductCard;
