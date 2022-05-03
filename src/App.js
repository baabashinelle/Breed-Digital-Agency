import Header from './Components/Header';
import Companies from './Components/Companies'
import Services from './Components/Services';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Clients from './Components/Clients';
import Blog from './Components/Blog';
import './app.css'
import Preloader from './Components/Preloader';

// import { Sugar } from "react-preloaders";


function App() {
  return (
    <div className="App">
      <Header />
      <Companies />
      <Services />
      <Experience />
      <Projects />
      <Clients />
      <Blog />
      <Preloader/>
      {/* <Sugar/> */}
    </div>
  );
}

export default App;
