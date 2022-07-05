import './css/style.css'
import './css/bootstrap-icons.css'
import Header from './components/Header';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
