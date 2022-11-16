import "./App.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Pages/Home/Home";
import Partners from "./Pages/Partners/Partners";
import Schedule from "./Pages/Schedule/Schedule";
import Speakers from "./Pages/Speakers/Speakers";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Speakers />
      <Partners />
      <Schedule />
    </>
  );
}

export default App;
