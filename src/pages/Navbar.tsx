import { useState, } from "react";
import {
  ShoppingCart,
  User,
  ChevronDown,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
const navigate = useNavigate();

  return (
    <nav className="bg-white relative">
      {/* Main Navigation */}
      <div className="px-8 lg:px-12">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            
            <div onClick={
() => navigate('/')}
             className="leading-none">
              <div className="flex items-baseline">
                <span className="text-3xl font-serif italic text-green-700">Gha</span>
                <span className="text-3xl font-serif text-gray-800">Roti</span>
                <span className="text-green-600 text-2xl ml-1">🌿</span>
              </div>
              <div className="text-xs uppercase tracking-widest text-gray-500 ml-1">
                Fresh From Fields To Your Home
              </div>
            </div>
          </div>

          {/* Center - Social Icons & Guarantee */}
          <div className="hidden lg:flex items-center space-x-5">
            <div className="flex items-center space-x-4 text-lg">
              <a className="text-[#6b6d6f] hover:opacity-80 transition"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-[#6b6d6f] hover:opacity-80 transition"><i className="fab fa-x-twitter"></i></a>
              <a href="#" className="text-[#6b6d6f] hover:opacity-80 transition"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-[#6b6d6f] hover:opacity-80 transition"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-[#6b6d6f] hover:opacity-80 transition"><i className="fab fa-youtube"></i></a>
            </div>

            <div className="w-px h-5 bg-gray-300"></div>

            <div className="flex items-center text-sm font-semibold text-gray-800">
              <span className="text-lg text-green-700 mr-1">₹</span>
              <span>Low Price Guarantee</span>
            </div>
          </div>

          {/* Right Section - Cart & Login */}
          <div className="flex items-center space-x-8">
            <button className="flex items-center space-x-2 group">
              <div className="relative">
                <ShoppingCart className="h-5 w-5 text-gray-700 group-hover:text-green-600 transition-colors" />
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                  0
                </span>
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors">
                My Cart
              </span>
            </button>
            {/* //hdldke */}

            <button className="flex items-center space-x-2 group">
              <User className="h-5 w-5 text-gray-700 group-hover:text-green-600 transition-colors" />
              <span className="text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors">
                Login/ Sign up
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="bg-green-50 border-t border-gray-100 relative">
        <div className="px-8 lg:px-12">
          <div className="flex items-center justify-start py-3 space-x-6 relative">
            {/* Subscription Button with Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl font-medium space-x-2 shadow-sm transition"
              >
                <span>Subscription Plans</span>
                <ChevronDown className={`w-4 h-4 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

             {isDropdownOpen && (
  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-100 z-20">
    <ul className="text-gray-700 text-sm">
      <li
        onClick={() => { navigate("/subscription/roti"); setIsDropdownOpen(false); }}
        className="px-4 py-2 hover:bg-green-50 cursor-pointer"
      >
        Roti & Aata
      </li>
      <li
        onClick={() => { navigate("/subscription/meat"); setIsDropdownOpen(false); }}
        className="px-4 py-2 hover:bg-green-50 cursor-pointer"
      >
        Meat
      </li>
      <li
        onClick={() => { navigate("/subscription/eggs"); setIsDropdownOpen(false); }}
        className="px-4 py-2 hover:bg-green-50 cursor-pointer"
      >
        Eggs
      </li>
    </ul>
  </div>
)}
            </div>

            {/* Other Nav Links */}
           <nav className="flex items-center space-x-8 text-sm font-medium">
              <div onClick={() => navigate('/')} className="text-black hover:text-green-600 transition">
    Home
  </div>
  <div onClick={() => navigate('/aboutUs')} className="text-black hover:text-green-600 transition">
    About Us
  </div>
  <div onClick={() => navigate('/contact')} className="text-black hover:text-green-600 transition">
    Contact Us
  </div>
</nav>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
