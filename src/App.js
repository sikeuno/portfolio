import About from "./Components/About";
import Conatct from "./Components/Conatct";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Socialinks from "./Components/Socialinks";


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Conatct/>


      <Socialinks/>
    </div>
  );
}

export default App;
