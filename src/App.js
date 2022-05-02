import Header from './Components/Header';
import Companies from './Components/Companies'
import Services from './Components/Services';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Clients from './Components/Clients';


function App() {
  return (
    <div className="App">
      <Header />
      <Companies />
      <Services />
      <Experience/>
      <Projects/>
      <Clients/>
    </div>
  );
}

export default App;
