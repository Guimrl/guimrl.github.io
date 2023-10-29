import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Home from './components/Main/Home/Home';
import About from './components/Main/About/About';
import Projects from './components/Main/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Home />
        {/* <Main /> */}
        <About />
        <Projects />
        {/* <Skills /> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
