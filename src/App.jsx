import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import PrivacyPolicy from './routes/PrivacyPolicy';

export default function App() {
  return (
    <Router basename="/clippy"> 
      <Routes>
        <Route path="/" element={< Home />} /> 
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}