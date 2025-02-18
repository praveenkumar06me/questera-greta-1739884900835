import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';

export default function Logout() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      logout();
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [logout, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Thanks for visiting!
        </h2>
        <p className="text-gray-600">
          Come back soon for another cup of happiness...
        </p>
      </motion.div>
    </div>
  );
}