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
import Testimonial from './components/Testimonial/Testimonial';
import SingleBlog from './components/Blog/Single_Blog/SingleBlog';


function App() {
  return (
    <div>
      <Navbar />
      <Route path='/' >
        <Home />
      </Route>
      <Route path='/' >
        <About />
      </Route>
      <Route path='/' >
        <Expertise />
      </Route>
      <Route path='/' >
        <Services />
      </Route>
      <Route>
        <Portfolio />
      </Route>
      {/* <Testimonial /> */}
      <Route path='/'>
        <Blog />
      </Route>
      <Route path='/singleBlog' exact>
        <SingleBlog />
      </Route>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
