import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';

export default function App() {
  return (
    <Router basename="/clippy"> 
      <Routes>
        <Route path="/" element={< Home />} /> 
      </Routes>
    </Router>
  );
}