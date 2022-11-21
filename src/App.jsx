import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./Components/Loader/Loader";
import Nav from "./Components/Nav/Nav";
import Faq from "./Pages/Faq/Faq";
import Home from "./Pages/Home/Home";
import Partners from "./Pages/Partners/Partners";
import Schedule from "./Pages/Schedule/Schedule";
import Speakers from "./Pages/Speakers/Speakers";
import Team from "./Pages/Team/Team";
import WhyDevFest from "./Pages/WhyDevFest/WhyDevFest";

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
          <WhyDevFest />
          <Speakers />
          <Partners />
          <Schedule />
          <Team />
          <Faq />
        </>
      )}
    </>
  );
}

export default App;
