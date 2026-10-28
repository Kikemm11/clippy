import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivacyPolicy from './routes/Home';

export default function App() {
  return (
    <Router basename="/clippy"> {/* Use the base path here */}
      <Routes>
        <Route path="/" element={<PrivacyPolicy />} /> {/* Make Home relative to "/privacy" */}
      </Routes>
    </Router>
  );
}