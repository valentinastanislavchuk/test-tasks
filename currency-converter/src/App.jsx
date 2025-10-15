import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Converter from "./pages/Converter";
import Rates from "./pages/Rates";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Navbar />
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Converter />} />
            <Route path="/rates" element={<Rates />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

