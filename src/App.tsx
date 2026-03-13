import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Jobs from './pages/Jobs';
import Training from './pages/Training';
import Team from './pages/Team';
import CourseDetails from './pages/CourseDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white font-arabic" dir="rtl">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/training" element={<Training />} />
          <Route path="/training/:courseId" element={<CourseDetails />} />
          <Route path="/team" element={<Team />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
