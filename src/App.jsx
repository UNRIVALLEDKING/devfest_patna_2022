import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./Components/Loader/Loader";
import Nav from "./Components/Nav/Nav";
import Home from "./Pages/Home/Home";
import Partners from "./Pages/Partners/Partners";
import Schedule from "./Pages/Schedule/Schedule";
import Speakers from "./Pages/Speakers/Speakers";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6500);
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Nav />
          <Home />
          <Speakers />
          <Partners />
          <Schedule />
        </>
      )}
    </>
  );
}

export default App;
