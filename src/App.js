import { Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Expertise from './components/Expertise/Expertise';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
// import Testimonial from './components/Testimonial/Testimonial';
import SingleBlog from './components/Blog/Single_Blog/SingleBlog';


function App() {
  return (
    <div>
      <Navbar />
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/about' exact >
        <About />
      </Route>
      <Route path='/skillbar' exact>
        <Expertise />
      </Route>
      <Route path='/services' exact>
        <Services />
      </Route>
      <Route path='/portfolio' exact >
        <Portfolio />
      </Route>
      {/* <Testimonial /> */}
      <Route path='/blog' exact>
        <Blog />
      </Route>
      <Route path='/singleBlog' exact>
        <SingleBlog />
      </Route>
      <Route path='/contact' exact>
        <Contact />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
