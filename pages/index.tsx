import React from "react";
import Hero from "../components/Hero";
import Infographics from "../components/Infographics";
import Umkm from "../components/Umkm";

import Seperator from "../components/Separator";

const Home = () => {
  return (
    <main>
      <Hero />
      <Seperator />
      <Infographics />
      <Seperator />
      <Umkm />
    </main>
  );
};

export default Home;
