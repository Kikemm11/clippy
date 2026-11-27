import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './routes/Home';
import PrivacyPolicy from './routes/PrivacyPolicy';
import DeleteAccount from './routes/DeleteAccount';
import Faqs from './routes/Faqs';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router basename="/clippy"> 
      <ScrollToTop />
      <Routes>
        <Route path="/" element={< Home />} /> 
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
    </Router>
  );
}