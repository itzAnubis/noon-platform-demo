import Header from './components/Header';
import Hero from './components/Hero';
import Marketplace from './components/Marketplace';
import Jobs from './components/Jobs';
import Training from './components/Training';
import Stories from './components/Stories';
import Support from './components/Support';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white font-arabic" dir="rtl">
      <Header />
      <Hero />
      <Marketplace />
      <Jobs />
      <Training />
      <Stories />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
