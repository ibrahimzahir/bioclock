import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Milestones from './pages/Milestones';
import AnimalAge from './pages/AnimalAge';
import LifeAudit from './pages/LifeAudit';
import BioStats from './pages/BioStats';
import Privacy from './pages/Privacy';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
          <Navbar />
          <main className="flex-1 p-4 md:p-8">
             <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/milestones" element={<Milestones />} />
                <Route path="/animal-age" element={<AnimalAge />} />
                <Route path="/audit" element={<LifeAudit />} />
                <Route path="/bio" element={<BioStats />} />
                <Route path="/biostats" element={<BioStats />} />
                <Route path="/privacy" element={<Privacy />} />
             </Routes>
          </main>
          
          <footer className="bg-white border-t border-gray-100 py-8 text-center text-sm text-gray-400 flex flex-col gap-2">
             <span>&copy; {new Date().getFullYear()} LifeStats. All rights reserved.</span>
             <Link to="/privacy" className="hover:text-gray-600 underline">Privacy Policy</Link>
          </footer>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
