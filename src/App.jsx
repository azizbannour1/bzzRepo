import AvailablePastas from "./components/AvailablePastas";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="App">
    <Topbar/>
    <Home/>
    <AvailablePastas/>
    <Footer/>
    </div>
  )

}

export default App;
