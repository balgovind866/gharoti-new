import { useState, useEffect } from "react";
import {

  Truck,
  Tag,
  Wallet,
  Headphones,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function GhaRotiApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
 const navigate = useNavigate();


  const images = [
    "https://firebasestorage.googleapis.com/v0/b/chatapps3-af7a5.appspot.com/o/gharoti%2FChatGPT_Image_Oct_18__2025__01_29_41_AM-removebg-preview.png?alt=media&token=dfd893ef-1787-469f-9124-e74b6d44ee94",
    "https://firebasestorage.googleapis.com/v0/b/chatapps3-af7a5.appspot.com/o/gharoti%2FChatGPT%20Image%20Oct%2019%2C%202025%2C%2012_13_16%20AM%20(1).png?alt=media&token=e4ea01aa-3ed3-4593-8bbf-c6a30d36b26e",
    "https://firebasestorage.googleapis.com/v0/b/chatapps3-af7a5.appspot.com/o/gharoti%2FMG8A3875_d6547b84-265c-42ac-896f-583de6327e11.png?alt=media&token=915fb689-81c8-4549-bdc2-661d2de8c923",
  ];

  

  

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      

      {/* HERO SECTION */}

   <div>
  <section className="py-6 px-4 lg:px-8 relative overflow-hidden">
    {/* Background Shape */}
    <div className="absolute top-0 right-0 w-90 h-90 bg-green-200 rounded-full opacity-20 blur-3xl"></div>

    <div
      className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10 rounded-4xl p-6 shadow-md"
      style={{ backgroundColor: "#ffeed6" }}
    >
      {/* LEFT CONTENT */}
      <div
        className={`space-y-4 transition-all duration-700 transform ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
        }`}
      >
        <div className="space-y-3">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Fresh Food. Daily Delivery
          </h1>
          <p className="text-lg lg:text-xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
            GhaRoti – Life Starts at Home
          </p>
        </div>

        <p className="text-base text-gray-700 leading-relaxed max-w-md">
          Enjoy the comfort of fresh, healthy food delivered daily to your
          doorstep.
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

      {/* RIGHT IMAGE */}
      <div
        className={`flex justify-center items-center transition-all duration-700 delay-200 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
        }`}
      >
        <div className="relative w-full max-w-sm h-[320px] flex justify-center items-center">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`absolute w-full h-full object-contain transition-opacity duration-700 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
</div>


     
{/* CATEGORIES SECTION */}
<section className="py-12 px-6 lg:px-12 bg-white">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
      Explore Categories
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
      {[
      {
      id: 1,
      title: "Fresh Meat",
      bgColor: "#ffeed6",
      img: "https://firebasestorage.googleapis.com/v0/b/chatapps3-af7a5.appspot.com/o/gharoti%2Ffresh%20raw%20rib%20eye%20steaks%20isolated%20on%20white%20fresh%20r.png?alt=media&token=ff4ca4dc-65bc-4eac-bb59-be0029f51e21",
      path: "/subscription/meat",
    },
    {
      id: 2,
      title: "Flours & Roti",
      bgColor: "#E6F6E6",
      img: "https://firebasestorage.googleapis.com/v0/b/chatapps3-af7a5.appspot.com/o/gharoti%2FChapati%20Flour_%20Uses_%20Baking%20Tips_%20and%20Substitutes%20.png?alt=media&token=4fb82d6b-553c-40d3-9761-fd6fdf5696e8",
      path: "/subscription/roti",
    },
    {
      id: 3,
      title: "Farm Fresh Eggs",
      bgColor: "#E7F5FF",
      img: "https://firebasestorage.googleapis.com/v0/b/chatapps3-af7a5.appspot.com/o/gharoti%2FEggs%20Images%20-%20Free%20Download%20on%20Freepik.png?alt=media&token=1d102fc2-535b-47de-a27a-4925b1a86cda",
      path: "/subscription/eggs",
    },
      ].map((cat) => (
        <div
          key={cat.id}
          className="flex flex-col items-center cursor-pointer group relative transition-all duration-500"
           onClick={() => navigate(cat.path)} // 👈 Replace with navigation
        >
          {/* Wrapper */}
          <div className="relative w-[260px] h-[260px] rounded-full overflow-hidden">
            {/* Circle Background */}
            <div
              className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundColor: cat.bgColor }}
            ></div>

            {/* Image */}
            <img
              src={cat.img}
              alt={cat.title}
              className="relative z-10 w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 rounded-full bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20">
              <span className="text-white font-semibold text-lg">Shop Now</span>
            </div>
          </div>

          {/* Category Title */}
          <p className="mt-5 text-xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-green-600">
            {cat.title}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


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
            <div className="absolute inset-0 rounded-full w-[460px] h-[460px] left-1/2 -translate-x-1/2"  style={{ backgroundColor: "#ffeed6" }}></div>

            {/* Main Image */}
            <img
              src="https://firebasestorage.googleapis.com/v0/b/chatapps3-af7a5.appspot.com/o/gharoti%2Fhome_page_4.png?alt=media&token=15566f3a-7e9b-4a16-a44e-94cac1510e5d"
              alt="Grocery Man"
              className="relative z-10 w-[460px] h-[460px] object-cover rounded-full"
            />

           
          </div>
        </div>
      </div>

      
   
    </section>

      {/* FEATURES SECTION */}
      <section className="bg-white py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Truck className="w-8 h-8" />, title: "Fast Delivery", desc: "Quick delivery to your doorstep" },
            { icon: <Tag className="w-8 h-8" />, title: "Best Prices", desc: "Competitive prices guaranteed" },
            { icon: <Wallet className="w-8 h-8" />, title: "Easy Payments", desc: "Multiple payment options available" },
            { icon: <Headphones className="w-8 h-8" />, title: "Customer Support", desc: "24/7 support for all your needs" },
          ].map((feature, index) => (
            <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition">
              <div className="text-green-600">{feature.icon}</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

   
    </div>
  );
}