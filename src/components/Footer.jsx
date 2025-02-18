import { FaInstagram, FaEnvelope, FaCoffee } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-brown-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold flex items-center gap-2">
              <FaCoffee /> Sagar's Cafe
            </h3>
            <p className="mt-2">Serving the perfect cup since 2024</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="mt-2 space-y-2">
              <a href="mailto:Praveenkumar06me@gmail.com" 
                 className="flex items-center gap-2 hover:text-yellow-300">
                <FaEnvelope /> Praveenkumar06me@gmail.com
              </a>
              <a href="https://instagram.com/praveenkrpatra" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="flex items-center gap-2 hover:text-yellow-300">
                <FaInstagram /> @praveenkrpatra
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold">Hours</h4>
            <div className="mt-2">
              <p>Monday - Friday: 7am - 8pm</p>
              <p>Saturday - Sunday: 8am - 9pm</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-700 text-center">
          <p>&copy; 2024 Sagar's Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}