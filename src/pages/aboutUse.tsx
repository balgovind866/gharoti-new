import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  CheckCircle,
  Users,
  Target,
  Heart,
  Shield,
  Award
} from "lucide-react";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-gray-100">
      {/* Hero Banner */}
      <section className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r to-green-50 to-green-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
         
        />
        
        <div className="relative z-10 h-full flex items-center justify-start max-w-7xl mx-auto px-8 lg:px-12">
          <div>
            <h1 
              className={`text-5xl lg:text-7xl font-bold text-black mb-4 transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
              }`}
            >
              About us
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Content - Black Card */}
            <div 
              className={`bg-black text-white rounded-3xl p-10 lg:p-12 shadow-2xl relative z-10 transition-all duration-1000 delay-200 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
              }`}
            >
              <h2 className="text-4xl font-bold mb-6">GhaRoti</h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                GhaRoti is a food-tech startup driven by the idea of simplifying traditional Indian meal preparation through modern, tech-enabled services. While we begin our journey with the daily essential.
              </p>
              <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center gap-2 group">
                know more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Image - Circular */}
            <div 
              className={`relative transition-all duration-1000 delay-400 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
              }`}
            >
              <div className="relative">
                {/* Yellow Background Shape */}
                <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-yellow-500 rounded-full -z-10"></div>
                
                {/* Circular Image */}
                <div className="relative z-10 w-[400px] h-[400px] mx-auto">
                  <div className="w-full h-full rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-blue-200 to-blue-400">
                    <img
                      src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800"
                      alt="Hands reaching up"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - Reversed Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image - Circular */}
            <div 
              className={`relative order-2 lg:order-1 transition-all duration-1000 delay-600 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
              }`}
            >
              <div className="relative">
                {/* Yellow Background Shape */}
                <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-yellow-500 rounded-[40%] -z-10"></div>
                
                {/* Circular Image */}
                <div className="relative z-10 w-[450px] h-[450px] mx-auto">
                  <div className="w-full h-full rounded-full overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800"
                      alt="Golden sculpture"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Brown Card */}
            <div 
              className={`bg-[#4A3428] text-white rounded-3xl p-10 lg:p-12 shadow-2xl order-1 lg:order-2 transition-all duration-1000 delay-800 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
              }`}
            >
              <h2 className="text-4xl font-bold mb-2">
                GhaRoti: <span className="text-yellow-400">An Idea to Reality</span>
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-8 mt-6">
                An idea that will change you Life in a position way in forever. The mission to Help Women to empower at the same, how we deliver a variety of food products and bring you joy.
              </p>
              <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center gap-2 group">
                Know more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* GMP Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Brown Card */}
            <div 
              className={`bg-[#4A3428] text-white rounded-3xl p-10 lg:p-12 shadow-2xl transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
              }`}
            >
              <h2 className="text-4xl font-bold mb-4">GMP at a Glance</h2>
              <p className="text-gray-300 text-lg mb-6">Good Manufacturing Practices</p>
              
              <p className="text-white italic text-lg mb-8">
                Safety | Quality | Hygiene | Consistency
              </p>
              
              <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center gap-2 group">
                Know more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Image */}
            <div 
              className={`relative transition-all duration-1000 delay-200 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
              }`}
            >
              <div className="relative">
                {/* Black Angular Shape */}
                <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-black transform -skew-x-12 -z-10"></div>
                {/* Yellow Angular Shape */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[350px] bg-yellow-500 transform skew-x-12 -z-10"></div>
                
                {/* Oval Image */}
                <div className="relative z-10 w-full max-w-[550px] h-[400px] mx-auto">
                  <div className="w-full h-full rounded-[50%] overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800"
                      alt="Modern Hi-Tech Roti Making"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Text Overlay */}
                  <div className="absolute top-4 right-8 bg-white/95 px-4 py-2 rounded-lg shadow-lg">
                    <p className="text-black font-bold text-sm">Modern Hi-Tech Roti Making</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Products CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 flex justify-end">
          <button className="bg-black text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-xl">
            Explore our products
          </button>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
            Our Core Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-12 h-12" />,
                title: "Mission Driven",
                desc: "Empowering women and simplifying daily meal preparation for Indian families"
              },
              {
                icon: <Heart className="w-12 h-12" />,
                title: "Quality First",
                desc: "Premium ingredients and hygienic preparation in every product we deliver"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Customer Centric",
                desc: "Your satisfaction and convenience are at the heart of everything we do"
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Food Safety",
                desc: "GMP certified facilities ensuring the highest safety and quality standards"
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Innovation",
                desc: "Combining traditional recipes with modern technology for excellence"
              },
              {
                icon: <CheckCircle className="w-12 h-12" />,
                title: "Reliability",
                desc: "Consistent daily delivery you can count on, every single day"
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="text-green-600 mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      

      {/* Footer */}
      <footer className="bg-[#f8faf8] border-t border-gray-200 pt-16 pb-6">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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
                <span>+91 981-900-0300</span>
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

          <div>
            <h3 className="text-xl font-semibold mb-6">Account</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="hover:text-green-600 cursor-pointer">My Orders</li>
              <li className="hover:text-green-600 cursor-pointer">My Wishlist</li>
              <li className="hover:text-green-600 cursor-pointer">Latest Offers</li>
              <li className="hover:text-green-600 cursor-pointer">Feedback</li>
              <li className="hover:text-green-600 cursor-pointer">Payments</li>
            </ul>
          </div>
{/* kdj */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Help Center</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="hover:text-green-600 cursor-pointer">Your Account</li>
              <li className="hover:text-green-600 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-green-600 cursor-pointer">Terms and Conditions</li>
              <li className="hover:text-green-600 cursor-pointer">Cancellation Policy</li>
              <li className="hover:text-green-600 cursor-pointer">Refund & Return</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Useful links</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="hover:text-green-600 cursor-pointer">About Us</li>
              <li className="hover:text-green-600 cursor-pointer">Blog</li>
              <li className="hover:text-green-600 cursor-pointer">Contact</li>
              <li className="hover:text-green-600 cursor-pointer">Deal of the Day</li>
              <li className="hover:text-green-600 cursor-pointer">Best Seller</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6 px-8 max-w-7xl mx-auto text-center text-gray-600 text-sm">
          <p>
            © 2025, All Rights Reserved by{" "}
            <span className="text-green-600 font-semibold">GhaRoti</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;