import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
          alt="Coffee background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome to Sagar's Cafe
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Where every cup tells a story
          </p>
          <Link
            to="/menu"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block"
          >
            Explore Menu
          </Link>
        </motion.div>
      </div>
    </div>
  );
}