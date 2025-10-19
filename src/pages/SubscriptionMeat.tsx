
import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
const SubscriptionMeat = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null); 

  const plans = [
    {
      id: 1,
      title: "Basic Meat Pack",
      subtitle: "Fresh Daily Essentials",
      price: "₹999",
      period: "/month",
      discount: "{ Enjoy 10–20% OFF on Fresh Meat! }",
      description: "Perfect starter pack for small families – fresh, quality meat delivered daily. Includes premium cuts for everyday cooking needs.",
      features: [
        "500g Fresh Chicken Daily",
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
      title: "Premium Meat Combo",
      subtitle: "Chef's Choice Selection",
      price: "₹1,899",
      period: "/month",
      discount: "{ Enjoy 10–20% OFF on Fresh Meat! }",
      description: "Most popular choice! Complete meat variety – chicken, mutton, and premium cuts. Handpicked by experts, delivered fresh to your doorstep daily.",
      features: [
        "700g Mixed Meat Selection Daily",
        "Premium Quality Chicken & Mutton",
        "On advance order & payment",
        "Discount & coupon on Other products",
        "Priority delivery slots",
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
      title: "Family Feast Pack",
      subtitle: "Complete Protein Solution",
      price: "₹2,499",
      period: "/month",
      discount: "{ Enjoy 10–20% OFF on Fresh Meat! }",
      description: "Ultimate family pack – premium chicken, mutton, fish, and eggs. Restaurant-quality meat, home-delivered convenience. Best value for large families.",
      features: [
        "1kg Premium Meat Mix Daily",
        "Chicken, Mutton, Fish & Eggs",
        "Free home delivery",
        "On advance order & payment",
        "Discount & coupon on Other products",
        "Priority delivery slots",
        "Flexible delivery timings",
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
          <div className="inline-block mb-4">
            <span className="bg-red-100 text-red-600 px-6 py-2 rounded-full font-semibold text-sm">
              🥩 Premium Meat Subscription
            </span>
          </div>
          
          <h1 className="text-5xl font-bold text-green-700 mb-4">
            Fresh Meat, Daily Delivery
          </h1>
          
          <div className="mb-6">
            <span className="text-3xl font-bold bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
              GhaRoti Meat Plans
            </span>
          </div>
          
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-4">
            Choose your plan according to your need and requirement, this offer is only to the registered member of <span className="font-semibold text-green-600">GhaRoti Family</span>. We have designed these plans to help our members receive fresh, premium quality meat every day without a miss and on top of it to save money, time, energy and enjoy a good Healthy Life always.
          </p>
          
          <p className="text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our Meat Products Combo is thoughtfully designed to meet the daily protein needs of a family of 4 persons. You can choose from a variety of plans tailored to your preferences. Each plan includes fresh, premium quality chicken, mutton, fish, and eggs – ensuring that you have the perfect amount to satisfy your family's requirements.
          </p>
        </div>
      </section>

      {/* Benefits Banner */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: "🎯", title: "100% Fresh", desc: "Farm to table quality" },
              { icon: "❄️", title: "Cold Chain", desc: "Temperature controlled" },
              { icon: "🔪", title: "Expert Cut", desc: "Professional butchery" },
              { icon: "✅", title: "Quality Check", desc: "Hygiene certified" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-2">{item.icon}</div>
                <h4 className="font-bold text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
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
                  plan.highlighted ? "ring-4 ring-red-500 scale-105" : ""
                }`}
              >
                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {plan.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{plan.subtitle}</p>
                  
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

      {/* Why Choose Us Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose GhaRoti Meat?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌟",
                title: "Premium Quality",
                desc: "Sourced from certified farms with strict quality control"
              },
              {
                icon: "🚚",
                title: "Daily Fresh Delivery",
                desc: "Never frozen, always fresh meat delivered every morning"
              },
              {
                icon: "💰",
                title: "Best Value",
                desc: "Save up to 20% compared to regular market prices"
              },
              {
                icon: "🏥",
                title: "Hygiene Certified",
                desc: "FSSAI approved with regular health inspections"
              },
              {
                icon: "📱",
                title: "Easy Management",
                desc: "Manage orders, skip days, and track delivery via app"
              },
              {
                icon: "👨‍🍳",
                title: "Expert Cuts",
                desc: "Professional butchery with customized cutting options"
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="bg-green-50 p-6 rounded-2xl hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
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

    
    </div>
  );
};

export default SubscriptionMeat;