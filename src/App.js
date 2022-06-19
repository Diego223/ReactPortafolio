import './App.css';
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Contact from './components/Contact/Contact'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Contact />


    </div>
  );
}

export default App;
