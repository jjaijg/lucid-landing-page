import React, { useState } from "react";

import { HomeSection, Navbar, Sidebar } from "../components";
import { HOME_OBJ } from "../data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Navbar toggle={toggle} />
      <HomeSection {...HOME_OBJ} />
    </>
  );
};

export default Home;
