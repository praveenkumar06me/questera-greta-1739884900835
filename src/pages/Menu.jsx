import { motion } from 'framer-motion';
import { useCart } from '../contexts/CartContext';
import { toast } from 'react-hot-toast';

const menuItems = [
  {
    id: 1,
    name: "Espresso",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a",
    description: "Rich and bold single shot of espresso"
  },
  {
    id: 2,
    name: "Cappuccino",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1534778101976-62847782c00e",
    description: "Espresso with steamed milk and foam"
  },
  {
    id: 3,
    name: "Latte",
    price: 4.49,
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f",
    description: "Espresso with steamed milk"
  },
  // Add more items as needed
];

export default function Menu() {
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(`Added ${item.name} to cart!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Menu</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xl font-bold">${item.price}</span>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-full transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}