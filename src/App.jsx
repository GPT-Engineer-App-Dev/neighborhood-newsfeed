import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import LocalNews from './pages/LocalNews.jsx';
import Sports from './pages/Sports.jsx';
import Technology from './pages/Technology.jsx';
import Entertainment from './pages/Entertainment.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/local-news" element={<LocalNews />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/entertainment" element={<Entertainment />} />
      </Routes>
    </Router>
  );
}

export default App;