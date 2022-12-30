import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { createRef } from "react";
import Scan from "./pages/Scan";
import "antd/dist/reset.css";

function App() {
  const homeRef = createRef(null);
  const featureRef = createRef(null);
  const aboutRef = createRef(null);
  const contactRef = createRef(null);
  const scanRef = createRef(null);

  return (
    <div>
      <Navbar
        homeRef={homeRef}
        featureRef={featureRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      <Home ref={homeRef} scanRef={scanRef} />
      <Features ref={featureRef} scanRef={scanRef} />
      <Scan ref={scanRef} />
      {/* <About ref={aboutRef} />
      <Contact ref={contactRef} />
      <Footer /> */}
    </div>
  );
}

export default App;
