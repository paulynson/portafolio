
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './layouts/Navbar'
import CoverLetter from './components/CoverLetter'
import Sidebar from './layouts/Sidebar';
import Footer from './layouts/Footer';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App font-poppins">
      <Navbar />
      <Sidebar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="coverletter" element={<CoverLetter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
