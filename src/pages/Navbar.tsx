import { useState } from "react";
import { ChevronDown,User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [cityDropdown, setCityDropdown] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="flex items-center justify-between px-12 lg:px-60 py-3">
        {/* Left Section: Logo + Location */}
        <div className="flex items-center space-x-1">
          {/* Logo */}
          <div onClick={() => navigate("/")} className="cursor-pointer flex items-center space-x-2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/chatapps3-af7a5.appspot.com/o/gharoti%2Flogo.png?alt=media&token=6c9b78a7-e4bc-46c7-bbcf-4c3c5cf32f35" // replace with your actual logo path
              alt="Logo"
              className="h-15 w-auto"
            />
          </div>

          {/* Location */}
         <div className="relative">
  <button
    onClick={() => setCityDropdown(!cityDropdown)}
    className="flex items-center space-x-1 text-sm text-gray-800 font-medium"
  >
    <span className="text-gray-500">Deliver In</span>
    <span className="text-black font-semibold">Chennai</span>
    <ChevronDown className="w-4 h-4 text-gray-500" />
  </button>

  {cityDropdown && (
    <div className="absolute top-8 left-0 bg-white border rounded-md shadow-md text-sm z-20">
      <ul>
        {["Chennai", "Bangalore", "Mumbai", "Delhi"].map((city) => (
          <li
            key={city}
            className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
            onClick={() => {
              setCityDropdown(false)
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </div>
  )}

  {/* 👇 Ghar Roti text just below */}
    <div className="flex items-baseline">
                <span className="text-2xl font-bold text-green-700">Gha</span>
                <span className="text-2xl font-bold text-gray-800">Roti</span>
               
              </div>
</div>
        </div>

        {/* Middle Section: Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-[15px] font-medium text-gray-800">
          <div
            onClick={() => navigate("/")}
            className="hover:text-green-600 cursor-pointer transition-colors"
          >
            Home
          </div>
          <div
            onClick={() => navigate("/aboutUs")}
            className="hover:text-green-600 cursor-pointer transition-colors"
          >
            About Us
          </div>
          <div
            onClick={() => navigate("/contact")}
            className="hover:text-green-600 cursor-pointer transition-colors"
          >
            Contact Us
          </div>
        </div>

        {/* Right Section: Button */}
         <div className="flex items-center space-x-6">
             
              <button className="hidden sm:flex items-center space-x-2 text-gray-700 hover:text-green-600 transition">
                <User className="w-5 h-5" />
                <span className="text-sm font-medium">Login</span>
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition">
                Download App
              </button>
            </div>
      </div>
    </nav>
  );
};

export default Navbar;
