import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Loader from "./Components/Loader/Loader";
import Schedule from "./Pages/Schedule/Schedule";
import Nav from "./Components/Nav/Nav";
import HomePage from "./HomePage";

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
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/agenda" element={<Schedule />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </>
  );
}

export default App;
