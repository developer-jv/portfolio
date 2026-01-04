import Navbar from "./components/molecules/Navbar.jsx";
import Landing from "./components/templates/Landing.jsx";
import AboutMe from "./components/templates/AboutMe.jsx";
import Portfolio from "./components/templates/Portfolio.jsx";
import Contact from "./components/templates/Contact.jsx";
import End from "./components/molecules/End.jsx";

const App = () => (
  <>
    <Navbar />
    <Landing />
    <AboutMe />
    <Portfolio />
    <Contact />
    <End />
  </>
);

export default App;
