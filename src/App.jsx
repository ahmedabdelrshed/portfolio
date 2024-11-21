import { MdKeyboardArrowUp } from "react-icons/md";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import { Main } from "./components/main/Main";

function App() {
  return (
    <div className="container" id='home'>
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      <a href="#home">
        <button className="scroll">
          <MdKeyboardArrowUp />
        </button>
      </a>
    </div>
  );
}

export default App;
