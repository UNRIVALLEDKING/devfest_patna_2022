import React from "react";
import Faq from "./Pages/Faq/Faq";
import Home from "./Pages/Home/Home";
import Partners from "./Pages/Partners/Partners";
import Speakers from "./Pages/Speakers/Speakers";
import Team from "./Pages/Team/Team";
import WhyDevFest from "./Pages/WhyDevFest/WhyDevFest";

export default function HomePage() {
  return (
    <>
      <Home />
      <WhyDevFest />
      <Speakers />
      <Partners />
      <Team />
      <Faq />
    </>
  );
}
