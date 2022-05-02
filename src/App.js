import Header from './Components/Header';
import Companies from './Components/Companies'
import Services from './Components/Services';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Clients from './Components/Clients';
import Blog from './Components/Blog';


function App() {
  return (
    <div className="App">
      <Header />
      <Companies />
      <Services />
      <Experience/>
      <Projects/>
      <Clients/>
      <Blog/>
    </div>
  );
}

export default App;
