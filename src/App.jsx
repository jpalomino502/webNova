import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/header';
import Footer from './components/common/Footer';
import Home from './pages/home';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
