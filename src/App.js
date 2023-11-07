import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import SocialLinks from "./components/socialLinks";
import Portfolios from "./components/Portfolios";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Portfolios />
      <Experience />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
