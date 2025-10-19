import React, { useState } from "react";
import { Check, ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";

const SubscriptionRoti = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const plans = [
    {
      id: 1,
      title: "Atta Roti - Regular",
      price: "₹799",
      period: "/month",
      discount: "{ Enjoy 10–20% OFF on Rotis! }",
      description: "Smart choice for everyday savings – fresh Rotis without stretching your budget. Made for cozy kitchens and first-time foodies.",
      features: [
        "On advance order & payment",
        "Discount & coupon on Other products",
        "Account management",
        "Pick-up Point near you place(POS)",
        "Complete support",
        "Access all products",
        "Tailored solutions for every need",
        "Customer support & service on-line, WhatsApp, e-mail & phone"
      ],
      highlighted: false,
      buttonStyle: "border-2 border-red-500 text-red-500 hover:bg-red-50"
    },
    {
      id: 2,
      title: "Atta Roti - MP Premium Atta",
      price: "₹1,299",
      period: "/month",
      discount: "{ Enjoy 10–20% OFF on Rotis! }",
      description: "For those who settle for nothing less than premium – chef-quality Rotis, straight to your doorstep. Big on health, big on flavor.",
      features: [
        "On advance order & payment",
        "Discount & coupon on Other products",
        "Account management",
        "Pick-up Point near you place(POS)",
        "Complete support",
        "Access all products",
        "Tailored solutions for every need",
        "Customer support & service on-line, WhatsApp, e-mail & phone"
      ],
      highlighted: true,
      buttonStyle: "bg-black text-white hover:bg-gray-800"
    },
    {
      id: 3,
      title: "Rumali Roti - Super fine Atta",
      price: "₹1,599",
      period: "/month",
      discount: "{ Enjoy 10–20% OFF on Rotis! }",
      description: "Balanced value, full flavor – ideal for families who love convenience and consistency. The Roti routine, simplified.",
      features: [
        "On advance order & payment",
        "Discount & coupon on Other products",
        "Account management",
        "Pick-up Point near you place(POS)",
        "Complete support",
        "Access all products",
        "Tailored solutions for every need",
        "Customer support & service on-line, WhatsApp, e-mail & phone"
      ],
      highlighted: false,
      buttonStyle: "border-2 border-red-500 text-red-500 hover:bg-red-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-white py-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
          <h1 className="text-5xl font-bold text-green-700 mb-4">
            Competitive Pricing
          </h1>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-4">
            Choose your plan according to your need and requirement, this offer is only to the registered member of <span className="font-semibold text-green-600">GhaRoti Family</span>. We have designed these plans to help our members received ROTI every day without a miss and top of it to save money time, energy and enjoy a good Healthy Life always.
          </p>
          <p className="text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our Roti Products Combo is thoughtfully designed to meet the daily Roti needs of a family of 4 person. You can choose from a variety of plans tailored to your preferences. Each plan includes a minimum of one pack of 10 Rotis per day, ensuring that you have the perfect amount to satisfy your family's requirements.
          </p>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                onMouseEnter={() => setHoveredCard(plan.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-white rounded-3xl p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                  plan.highlighted ? "ring-4 ring-green-500 scale-105" : ""
                }`}
              >
                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {plan.title}
                  </h3>
                  <div className="flex items-end justify-center mb-3">
                    <span className="text-5xl font-extrabold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-xl text-gray-600 ml-2">
                      {plan.period}
                    </span>
                  </div>
                  <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg px-4 py-2 inline-block">
                    <span className="text-sm font-bold text-yellow-800">
                      {plan.discount}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {plan.description}
                </p>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 mb-6 ${
                    plan.buttonStyle
                  } ${
                    hoveredCard === plan.id ? "scale-105 shadow-lg" : ""
                  }`}
                >
                  Start Now
                </button>

                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 text-gray-700"
                    >
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
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

      {/* Footer */}
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

          {/* Account */}
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

          {/* Help Center */}
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

          {/* Useful Links */}
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

        {/* Footer Bottom */}
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

export default SubscriptionRoti;