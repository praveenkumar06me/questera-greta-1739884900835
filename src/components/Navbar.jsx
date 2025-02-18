import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { FaCoffee, FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  const { user } = useAuth();
  const { cartItems } = useCart();

  return (
    <nav className="bg-brown-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FaCoffee className="text-2xl" />
            <span className="font-bold text-xl">Sagar's Cafe</span>
          </Link>
          
          <div className="flex space-x-4 items-center">
            <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
            <Link to="/menu" className="hover:text-yellow-300 transition">Menu</Link>
            <Link to="/about" className="hover:text-yellow-300 transition">About</Link>
            <Link to="/contact" className="hover:text-yellow-300 transition">Contact</Link>
            <Link to="/cart" className="relative hover:text-yellow-300 transition">
              <FaShoppingCart className="text-xl" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </Link>
            {user ? (
              <Link to="/logout" className="hover:text-yellow-300 transition">Logout</Link>
            ) : (
              <Link to="/login" className="hover:text-yellow-300 transition">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}