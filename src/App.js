import './App.css';
import Navbar from './component/Navbar/Navbar';
import Hero from './component/Hero/Hero';
import Skills from './component/Skills/Skills';
import Projects from './component/Projects/Projects';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
function App() {
  return (
    <div>
      <Navbar/>
      <div className='container'>
      <Hero/>
      <Skills/>
      <Projects/>
      <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
