
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="bg-[#f8faf8] border-t border-gray-200 pt-16 pb-6">
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
        
        {/* Who We Are Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-900">
            <span className="border-b-2 border-green-600 inline-block pb-1">
              Who we are!
            </span>
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            GhaRoti is a subscription-based food delivery startup focused on bringing fresh, 
            homemade-style rotis straight to your doorstep. Designed for families, professionals, 
            students and for all those who want Rotis ready at their dinning table.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            We are equipping with technology driven CRM to manage for members, the modern al-time 
            delivery tracking system, and a seamless mobile experience — all starting with the 
            humble "GhaRoti". And of the every-thing, we have 50% +women staff to support and 
            celebrate Women empowerment.
          </p>
        </div>

        {/* Useful Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-900">
            <span className="border-b-2 border-green-600 inline-block pb-1">
              Useful Links
            </span>
          </h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="hover:text-green-600 cursor-pointer transition-colors">• Home</li>
            <li className="hover:text-green-600 cursor-pointer transition-colors">• Terms & Conditions</li>
            <li className="hover:text-green-600 cursor-pointer transition-colors">• Disclaimer</li>
            <li className="hover:text-green-600 cursor-pointer transition-colors">• Privacy Policy</li>
            <li className="hover:text-green-600 cursor-pointer transition-colors">• GMP</li>
            <li className="hover:text-green-600 cursor-pointer transition-colors">• Cookies Policy</li>
            <li className="hover:text-green-600 cursor-pointer transition-colors">• Data Deleting Policy</li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-900">
            <span className="border-b-2 border-green-600 inline-block pb-1">
              Contact Us
            </span>
          </h3>
          <div className="space-y-3 text-gray-700 text-sm mb-6">
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-green-600" />
              <div className="flex flex-col sm:flex-row sm:space-x-2">
                <span>+91 9810755200</span>
                <span>+91 9810755300</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-green-600" />
              <span>gharoti.india@gmail.com</span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="mt-6">
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-green-500 hover:border-green-500 hover:text-white transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-green-500 hover:border-green-500 hover:text-white transition-all duration-300 group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-green-500 hover:border-green-500 hover:text-white transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-green-500 hover:border-green-500 hover:text-white transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-green-500 hover:border-green-500 hover:text-white transition-all duration-300 group"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <p>
          © 2025, All Rights Reserved by{" "}
          <span className="text-green-600 font-semibold">GhaRoti</span>
        </p>
        <p className="mt-2 md:mt-0">
          Powered by <span className="text-green-600 font-semibold">Odoo</span> - The #1
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;