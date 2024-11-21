import { MdKeyboardArrowUp } from "react-icons/md";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import { Main } from "./components/main/Main";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        document.querySelector("#scrollUp").style.opacity = 1;
      } else {
        document.querySelector("#scrollUp").style.opacity = 0;
      }
    });
  }, []);
  return (
    <div className="container" id="home">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      <a href="#home" id="scrollUp" style={{ opacity: 0, transition: "0.6s" }}>
        <button className="scroll">
          <MdKeyboardArrowUp />
        </button>
      </a>
    </div>
  );
}

export default App;
