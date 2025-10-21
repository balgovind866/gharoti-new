import { useState } from "react";
import { Check,  } from "lucide-react";
const SubscriptionEggs = () => {
   const [hoveredCard, setHoveredCard] = useState<number | null>(null); 

  const plans = [
    {
      id: 1,
      title: "Daily Dozen Pack",
      subtitle: "Essential Egg Supply",
      price: "₹499",
      period: "/month",
      discount: "{ Enjoy 10–20% OFF on Fresh Eggs! }",
      description: "Perfect for small families – 12 farm-fresh eggs delivered daily. Brown eggs from free-range hens, ensuring natural taste and nutrition.",
      features: [
        "12 Fresh Brown Eggs Daily",
        "Farm-fresh quality assured",
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
      buttonStyle: "border-2 border-orange-500 text-orange-500 hover:bg-orange-50"
    },
    {
      id: 2,
      title: "Premium Protein Pack",
      subtitle: "Family Favorite Choice",
      price: "₹899",
      period: "/month",
      discount: "{ Enjoy 10–20% OFF on Fresh Eggs! }",
      description: "Most popular! 24 premium eggs daily – perfect for large families. Mix of brown & white eggs from certified organic farms. Maximum freshness guaranteed.",
      features: [
        "24 Premium Eggs Daily (12 Brown + 12 White)",
        "Organic farm certified",
        "Free range & cage-free",
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
      title: "Jumbo Family Pack",
      subtitle: "Complete Protein Solution",
      price: "₹1,299",
      period: "/month",
      discount: "{ Enjoy 10–20% OFF on Fresh Eggs! }",
      description: "Ultimate family pack – 36 fresh eggs daily with variety. Brown, white, and omega-3 enriched eggs. Best value for joint families and protein enthusiasts.",
      features: [
        "36 Mixed Premium Eggs Daily",
        "Brown, White & Omega-3 Eggs",
        "Free home delivery",
        "Organic & cage-free certified",
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
      buttonStyle: "border-2 border-orange-500 text-orange-500 hover:bg-orange-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br bg-white">
      {/* Hero Section */}
       <section className="relative bg-gradient-to-bre py-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
          <div className="inline-block mb-4">
            <span className="bg-orange-100 text-orange-600 px-6 py-2 rounded-full font-semibold text-sm">
              🥚 Farm Fresh Eggs Subscription
            </span>
          </div>
          
          <h1 className="text-5xl font-bold text-green-700 mb-4">
            Fresh Eggs, Daily Delivery
          </h1>
          
          <div className="mb-6">
            <span className="text-3xl font-bold bg-gradient-to-r from-orange-500 via-yellow-600 to-orange-700 bg-clip-text text-transparent">
              GhaRoti Eggs Plans
            </span>
          </div>
          
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-4">
            Choose your plan according to your need and requirement, this offer is only to the registered member of <span className="font-semibold text-green-600">GhaRoti Family</span>. We have designed these plans to help our members receive farm-fresh, premium quality eggs every day without a miss and on top of it to save money, time, energy and enjoy a good Healthy Life always.
          </p>
          
          <p className="text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our Egg Products Combo is thoughtfully designed to meet the daily protein needs of a family of 4 persons. You can choose from a variety of plans tailored to your preferences. Each plan includes farm-fresh eggs from certified organic farms – ensuring that you have the perfect amount to satisfy your family's nutritional requirements.
          </p>
        </div>
      </section>

      {/* Benefits Banner */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: "🐔", title: "Free Range", desc: "Happy & healthy hens" },
              { icon: "🌾", title: "Organic Feed", desc: "Natural grain fed" },
              { icon: "✨", title: "Daily Fresh", desc: "Laid today, yours tomorrow" },
              { icon: "🏆", title: "Quality First", desc: "Grade A certified" }
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
      //onMouseEnter={() => setHoveredCard(plan.id)}  // ✅ Now it will work
      onMouseLeave={() => setHoveredCard(null)}

                className={`bg-white rounded-3xl p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                  plan.highlighted ? "ring-4 ring-orange-500 scale-105" : ""
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
            Why Choose GhaRoti Eggs?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🥚",
                title: "Farm Fresh Daily",
                desc: "Eggs collected from farms every morning and delivered to you"
              },
              {
                icon: "🌱",
                title: "Organic & Natural",
                desc: "Free-range hens fed with organic grains, no antibiotics"
              },
              {
                icon: "💪",
                title: "High Protein",
                desc: "Rich in protein, vitamins, and omega-3 fatty acids"
              },
              {
                icon: "✅",
                title: "Quality Tested",
                desc: "Every egg inspected for freshness and quality standards"
              },
              {
                icon: "📦",
                title: "Safe Packaging",
                desc: "Eco-friendly cartons ensuring zero breakage delivery"
              },
              {
                icon: "💰",
                title: "Best Prices",
                desc: "Direct from farms to you, cutting middlemen costs"
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

      {/* Nutritional Benefits Section */}
      <section className="bg-gradient-to-br bg-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Nutritional Powerhouse
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Each egg is packed with essential nutrients to fuel your day
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { nutrient: "Protein", amount: "6g", desc: "Per egg" },
              { nutrient: "Vitamin B12", amount: "100%", desc: "Daily value" },
              { nutrient: "Vitamin D", amount: "82%", desc: "Daily value" },
              { nutrient: "Selenium", amount: "22%", desc: "Daily value" }
            ].map((item, i) => (
              <div 
                key={i} 
                className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-3xl font-bold text-orange-600 mb-2">
                  {item.amount}
                </h3>
                <p className="font-semibold text-gray-900 mb-1">{item.nutrient}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

    
    </div>
  );
};

export default SubscriptionEggs;