import Header from './Components/Header';
import Companies from './Components/Companies'
import Services from './Components/Services';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Clients from './Components/Clients';
import Blog from './Components/Blog';
import './app.css'
import Preloader from './Components/Preloader';
import Footer from './Components/Footer';




function App() {
  return (
    <div className="App font-link">
      <Preloader />
      <Header id="home" />
      <Companies id="about"/>
      <Services id="services" />
      <Experience />
      <Projects id="projects" />
      <Clients />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
