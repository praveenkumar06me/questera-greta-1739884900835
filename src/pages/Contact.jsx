import { motion } from 'framer-motion';
import { FaEnvelope, FaInstagram, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600">We'd love to hear from you</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-2xl text-yellow-600" />
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <a href="mailto:Praveenkumar06me@gmail.com" 
                 className="text-gray-600 hover:text-yellow-600">
                Praveenkumar06me@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaInstagram className="text-2xl text-yellow-600" />
            <div>
              <h3 className="text-lg font-semibold">Instagram</h3>
              <a href="https://instagram.com/praveenkrpatra" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-gray-600 hover:text-yellow-600">
                @praveenkrpatra
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaPhone className="text-2xl text-yellow-600" />
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-2xl text-yellow-600" />
            <div>
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="text-gray-600">123 Coffee Street</p>
              <p className="text-gray-600">San Francisco, CA 94110</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-600 text-white rounded-md py-2 px-4 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}