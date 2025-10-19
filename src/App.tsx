// filepath: /Users/balgovindkushwaha/gharoti/src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";



import '@fortawesome/fontawesome-free/css/all.min.css';

import SubscriptionRoti from "./pages/SubscriptionRoti";
import SubscriptionMeat from "./pages/SubscriptionMeat";
import SubscriptionEggs from "./pages/SubscriptionEggs";
import Contact from "./pages/contact";
import AboutUs from "./pages/aboutUse";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutUs" element={<AboutUs />} />
             <Route path="/subscription/roti" element={<SubscriptionRoti />} />
  <Route path="/subscription/meat" element={<SubscriptionMeat />} />
  <Route path="/subscription/eggs" element={<SubscriptionEggs />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;