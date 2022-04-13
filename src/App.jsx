import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections"></div>
      <Intro/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
