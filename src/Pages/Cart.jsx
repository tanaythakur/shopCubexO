import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../Slices/Cart/CartSlice';

const Cart = () => { 
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch();

  const Total = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

      
    return (
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-3xl text-center font-bold mb-6 text-gray-800">Shopping Cart</h2>
        <div className="text-center py-12">
          
         {cartItems.length === 0 ? (
          <div className="text-6xl mb-4 text-gray-400">🛒
          <p className="text-gray-500 pt-6">Your cart is empty.</p>
          
          <Link
            to="/products"
            className="bg-blue-500 text-white text-sm mt-3 px-6 py-3 rounded hover:bg-blue-950 inline-block">
              Continue Shopping
          </Link>
          </div>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between mb-4 p-4 border rounded shadow">
             <img src={item.thumbnail || item.image} alt={item.name} className="w-16 h-16 object-cover rounded" /> 
            <div className="flex-1 ml-4">
              <h3 className="font-semibold">{item.title || item.name}</h3>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => dispatch(decreaseQuantity(item.id))}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                −
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => dispatch(increaseQuantity(item.id))}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                +
              </button>
            </div>
            
            <div>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="ml-4 px-3 py-1 bg-red-600 hover:bg-red-800 text-white rounded"
            >
              Remove
            </button>
            </div>
              
          </div>
        ))
      )}

      {cartItems.length > 0 && (
        <div>
          Total: ${Total()}
      <div>
          <Link
              to={'/payment'}>
              <button className='mt-4 px-6 py-2 rounded bg-blue-600 hover:bg-blue-900 text-white shadow-2xl'>
                Buy Now
              </button>
          </Link>
      </div>
        </div>
      )}

        </div>
      </div>
    );
  }

export default Cart