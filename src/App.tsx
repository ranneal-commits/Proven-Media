import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Insights from "./pages/Insights";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import BookCall from "./pages/BookCall";
import AdminDashboard from "./pages/AdminDashboard";
import Roster from "./pages/Roster";
import CRM from "./pages/CRM";
import Chatbot from "./components/Chatbot";
import VoiceAgent from "./components/VoiceAgent";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-primary text-white font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/about" element={<About />} />
            <Route path="/roster" element={<Roster />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<BookCall />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/crm" element={<CRM />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
        <VoiceAgent />
      </div>
    </Router>
  );
}
