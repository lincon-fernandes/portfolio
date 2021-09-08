import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
