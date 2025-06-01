import { useDispatch } from "react-redux";
import { addToCart } from "../Slices/Cart/CartSlice";
//import { addToCart } from '../features/cart/cartSlice';
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white  shadow-2xl overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-48 object-cover cursor-pointer"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.category}</p>
        <p className="text-gray-700 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-green-600">
            ${product.price}
          </span>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-950 transition-colors font-medium"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
