import { Link } from 'react-router-dom'
import deliveryIcon from '../assets/delivery.png';
import original from '../assets/100-percent.png';
import SafePayments from '../assets/payment-protection.png';

const Home = () => {
  return (
    <div className='max-w-6xl mx-auto p-4'>
      <div className='text-center mx-auto p-4'>
        <h1 className='text-5xl font-bold text-gray-700 mb-6'>
          Welcome to ShopCubexO
        </h1>
        <p className='text-xl text-gray-500 mb-8 max-w-2xl mx-auto'>
          Discover the best products at unbeatable prices.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/products"
            className="bg-indigo-500 text-white px-4 py-2 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-md"
          >
            Shop Now
          </Link>

          <Link
            to="/cart"
            className="bg-indigo-500 text-white  px-4 py-2 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-md"
          >
            View Cart
          </Link>
        </div>
      </div>
    
    <div className='grid grid-cols-1 gap-6 mt-3'>
      <div className='bg-white p-6 rounded-lg shadow-md text-center'>
        <img src={deliveryIcon} alt="delivery icon" className='mx-auto w-10 h-10 mb-3' />       
        <h3 className='text-lg font-black'>Free Delivery</h3>
        <p className='text-gray-500 text-center pt-2'>Free Shiping on all orders over 50$</p>
      </div>

      <div className='bg-white p-6 rounded-lg shadow-md text-center'>
        <img src={original} alt="original icon" className='mx-auto w-10 h-10 mb-3' />
        <h3 className='text-lg font-black'>Quality Product</h3>
        <p className='text-gray-500 text-center pt-2'>100% Authentic and Original items</p>
      </div>

      <div className='bg-white p-6 rounded-lg shadow-md text-center'>
        <img src={SafePayments} alt="safePayment icon" className='mx-auto w-10 h-10 mb-3' />
        <h3 className='text-lg font-black'>Secure Payment</h3>
        <p className='text-gray-500 text-center pt-2'>Your Payment information is safe with us</p>
      </div>
      </div>
    </div>
  )
}

export default Home