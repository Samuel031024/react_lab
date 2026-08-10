import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './styles/style.css';

import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Iphone from './pages/Iphone.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/iphone" element={<Iphone />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}