import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Expertise from './components/Expertise/Expertise';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Expertise />
      <Services />
      <Portfolio />
      <Testimonial />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
