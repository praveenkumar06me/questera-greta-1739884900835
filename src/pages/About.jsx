import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl text-gray-600">Crafting moments, one cup at a time</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
            alt="Cafe interior"
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-gray-600">
            Founded by John, Sagar's Cafe began with a simple mission: to serve 
            the perfect cup of coffee in a warm, welcoming environment. John's 
            passion for coffee began during his travels across South America, 
            where he discovered the art and science of coffee making.
          </p>
          <p className="text-gray-600">
            Today, we continue to honor that tradition by sourcing the finest beans, 
            roasting them to perfection, and serving them with care and attention 
            to detail that makes each cup special.
          </p>
          <div className="border-l-4 border-yellow-600 pl-4">
            <p className="text-lg italic">
              "Coffee is more than just a drink; it's a moment, a break, 
              a conversation waiting to happen." - John
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}