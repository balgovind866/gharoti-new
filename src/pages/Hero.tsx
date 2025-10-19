import React, { useState, useEffect } from "react";
import {
  Search,
  Headphones,
  Tag,
  Truck,
  Wallet,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  

  const images = [
    "src/assets/ChatGPT_Image_Oct_18__2025__01_29_41_AM-removebg-preview.png",
    "src/assets/ChatGPT Image Oct 19, 2025, 12_13_16 AM (1).png",
    "src/assets/MG8A3875_d6547b84-265c-42ac-896f-583de6327e11.png",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-green-50 to-gray-100 overflow-hidden">
      {/* Background gradient circles */}
<div
  className="absolute bottom-0 right-0 w-96 h-96 bg-green-300 rounded-full opacity-20 blur-3xl animate-pulse"
  style={{ animationDelay: "1s" }}
></div>

<div className="max-w-7xl mx-auto px-8 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
  {/* LEFT CONTENT */}
  <div
    className={`space-y-8 transition-all duration-1000 transform ${
      isVisible
        ? "translate-x-0 opacity-100"
        : "-translate-x-20 opacity-0"
    }`}
  >
    {/* Main Heading with Staggered Animation */}
    <div className="space-y-3">
      <h1
        className={`text-4xl lg:text-5xl font-bold text-green-600 leading-tight transition-all duration-700 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-8 opacity-0"
        }`}
      >
        Fresh Food. Daily Delivery
      </h1>
      
      <div
        className={`inline-block transition-all duration-700 delay-200 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-8 opacity-0"
        }`}
      >
        <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-500 via-green-600 to-green-700 bg-clip-text text-transparent animate-gradient">
          GhaRoti – Life Starts at Home
        </span>
      </div>
    </div>

    {/* Description with Word-by-Word Reveal Effect */}
    <p
      className={`text-lg text-gray-800 font-medium leading-relaxed transition-all duration-1000 delay-300 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
      style={{
        animationDelay: "0.3s"
      }}
    >
      <span className="inline-block animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        Enjoy the comfort of fresh, healthy food delivered daily to your doorstep.
      </span>
      <br />
      <span className="inline-block animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
        GhaRoti offers flexible subscription plans for Rotis, Aata, Chicken, Meat, and Eggs — designed to save your time, energy, and money while keeping your family healthy and satisfied.
      </span>
    </p>

    {/* SEARCH BAR with Scale Animation */}
    <div
      className={`bg-white rounded-2xl shadow-lg flex items-center border border-gray-200 overflow-hidden max-w-xl transition-all duration-700 delay-500 transform ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-10 opacity-0 scale-95"
      } hover:shadow-2xl hover:scale-[1.02]`}
    >
      <div className="pl-5 text-green-500 animate-pulse-subtle">
        <Search className="w-5 h-5" />
      </div>
      <input
        type="text"
        placeholder="What are you looking for?"
        className="flex-1 px-4 py-4 text-gray-700 focus:outline-none placeholder:transition-opacity placeholder:duration-300 focus:placeholder:opacity-50"
      />
      <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
        Search
      </button>
    </div>
  </div>
        {/* RIGHT IMAGE - SIMPLE FADE ANIMATION */}
        <div
          className={`flex justify-center items-center relative transition-all duration-1000 delay-600 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-20 opacity-0"
          }`}
        >
          <div className="relative w-full max-w-lg h-[500px] flex justify-center items-center">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className={`absolute w-full h-full object-contain transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8 lg:px-12">
          {[
            {
              icon: <Headphones className="h-7 w-7 text-green-600" />,
              title: "Customer Support",
              desc: "24/7 support for all your needs",
            },
            {
              icon: <Tag className="h-7 w-7 text-green-600" />,
              title: "Best Prices",
              desc: "Competitive prices guaranteed",
            },
            {
              icon: <Truck className="h-7 w-7 text-green-600" />,
              title: "Fast Delivery",
              desc: "Quick delivery to your doorstep",
            },
            {
              icon: <Wallet className="h-7 w-7 text-green-600" />,
              title: "Easy Payments",
              desc: "Multiple payment options available",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 bg-green-50 p-6 rounded-2xl hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="p-3 bg-white rounded-xl shadow-sm">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
{/* 📱 MOBILE APP SECTION - Same as the uploaded image */}
<section className="bg-[#F4FAF5] py-20">
  <div className="max-w-7xl mx-auto px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Left Side - Two Phones */}
    <div className="flex justify-center lg:justify-start relative">
      <div className="absolute inset-0 bg-green-100 rounded-3xl opacity-40 blur-2xl"></div>

      <div className="relative flex items-end space-x-[-80px]">
        {/* Left Phone */}
        <img
          src="/images/farmer-login-screen.png"
          alt="Farmer Store App Login Screen"
          className="relative z-20 w-[250px] sm:w-[280px] rounded-[2rem] shadow-2xl"
        />
        {/* Right Phone */}
        <img
          src="/images/farmer-product-screen.png"
          alt="Farmer Store Product Screen"
          className="relative z-10 w-[250px] sm:w-[280px] rounded-[2rem] shadow-xl"
        />
      </div>
    </div>

    {/* Right Side - Text & Buttons */}
    <div className="space-y-5 text-center lg:text-left">
      <p className="text-lg text-gray-800 font-medium">Download the</p>
      <h2 className="text-4xl lg:text-5xl font-extrabold text-green-700">
        The Farmer Store
      </h2>
      <p className="text-gray-600 text-base max-w-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      </p>

      <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
          alt="App Store"
          className="h-14 cursor-pointer hover:opacity-80 transition-opacity"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Google Play"
          className="h-14 cursor-pointer hover:opacity-80 transition-opacity"
        />
      </div>
    </div>
  </div>
</section>

        {/* 🥦 QUALITY SECTION */}
     <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Best Quality Healthy And
          </h2>
          <h3 className="text-2xl lg:text-3xl font-extrabold text-green-600 leading-tight">
          Rotis, Aata, Chicken, Meat, and Eggs
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
                   Enjoy the convenience of <strong className="text-green-600">fresh, nutritious food</strong> delivered right to your doorstep every day.  
        <strong className="text-green-600">GhaRoti</strong> brings you premium-quality <strong>Rotis, Aata, Chicken, Meat, and Eggs</strong> through flexible subscription plans — 
        designed to save your <strong>time, energy, and money</strong> while keeping your family healthy and happy.
          </p>

          <ul className="space-y-4">
            {[
               { icon: "🚚", text: "Daily Delivery at Your Doorstep" },
          { icon: "📦", text: "Easy Order Tracking & Management" },
          { icon: "💬", text: "Friendly Customer Support" },
          { icon: "🏷️", text: "Best Quality at Affordable Prices" },
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl shadow-md">
                  {item.icon}
                </div>
                <span className="text-lg text-gray-800 font-medium">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>

          <button className="bg-green-500 hover:bg-green-600 text-white px-10 py-3 rounded-full text-lg font-semibold transition-transform hover:scale-105 shadow-lg">
            Subscriptions Now
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center relative">
          <div className="relative">
            {/* Circle Background Shape */}
            <div className="absolute inset-0 bg-[#e9e9e4] rounded-full w-[460px] h-[460px] left-1/2 -translate-x-1/2"></div>

            {/* Main Image */}
            <img
              src="src/assets/home_page_4.png"
              alt="Grocery Man"
              className="relative z-10 w-[460px] h-[460px] object-cover rounded-full"
            />

            {/* Floating veggies */}
            <div className="absolute top-6 left-[70%] text-5xl animate-bounce">
              🥦
            </div>
            <div className="absolute top-20 right-[5%] text-5xl animate-bounce delay-200">
              🍅
            </div>
            <div className="absolute bottom-16 left-[15%] text-5xl animate-bounce delay-300">
              🥭
            </div>
          </div>
        </div>
      </div>

      {/* NEWSLETTER SECTION */}
      <div className="max-w-7xl mx-auto mt-20 px-8 lg:px-12">
        <div className="bg-[#5C3A00] rounded-[50px] px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <h3 className="text-2xl md:text-3xl font-semibold uppercase tracking-wide">
            Subscribe To Newsletter
          </h3>
          <div className="flex items-center w-full md:w-auto md:min-w-[400px] border-b border-white">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="flex-1 bg-transparent text-white placeholder-white px-4 py-3 focus:outline-none text-lg"
            />
            <button className="p-3 hover:scale-110 transition-transform">
              <ArrowRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* FOOTER SECTION */}
      <footer className="bg-[#f8faf8] border-t border-gray-200 pt-16 pb-6">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-green-600" />
                <span>
                  Shop 4, Videocon Building, Pali Village,
                  <br />
                  Bandra West, Mumbai, Maharashtra 400050
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-600" />
                <span>+91 981-900-0300, 987 658 7654</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-600" />
                <span>contact@thefarmersstore.in</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-green-600" />
                <span>Work Hours: 8:00am - 12pm</span>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Account</h3>
            <ul className="space-y-3 text-gray-700">
              <li>My Orders</li>
              <li>My Wishlist</li>
              <li>Latest Offers</li>
              <li>Feedback</li>
              <li>Payments</li>
            </ul>
          </div>

          {/* Help Center */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Help Center</h3>
            <ul className="space-y-3 text-gray-700">
              <li>Your Account</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Cancellation Policy</li>
              <li>Refund & Return</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="relative">
            <h3 className="text-xl font-semibold mb-6">Useful links</h3>
            <ul className="space-y-3 text-gray-700">
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Deal of the Day</li>
              <li>Best Seller</li>
            </ul>

            <img
              src="https://cdn.pixabay.com/photo/2016/03/05/19/02/vegetables-1238252_960_720.png"
              alt="Vegetables"
              className="absolute right-0 bottom-0 w-44 md:w-52 lg:w-56"
            />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-200 pt-6 px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm">
          <p>
            © 2023, All Rights Reserved by{" "}
            <span className="text-green-600 font-semibold">
              The Farmer’s Store
            </span>
          </p>
          <div className="flex space-x-5 mt-4 md:mt-0">
            <a href="#" className="hover:text-green-600">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-green-600">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-green-600">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-green-600">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
