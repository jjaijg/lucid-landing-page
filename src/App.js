import React from "react";
import { GlobalStyles } from "./globalStyles";
import Theme from "./Theme";

import Home from "./pages/Home";
import Features from "./pages/Features";
import Testimonial from "./pages/Testimonial";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <Home />
      <main>
        <Features />
        <Testimonial />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </Theme>
  );
}

export default App;
