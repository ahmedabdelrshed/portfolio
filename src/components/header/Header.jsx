import { useEffect, useState } from "react";
import "./header.css";
import { IoClose, IoMoonOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { GrSun } from "react-icons/gr";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [theme]);
  // Handlers
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const switchTheme = () => {
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <header className="flex">
      <div className="menu">
        {" "}
        <button className=" icon " onClick={toggleModal}>
          <IoMdMenu />
        </button>
      </div>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#home">Articles</a>
          </li>
        </ul>
      </nav>
      <button className="icon" onClick={switchTheme}>
        {theme === "dark" ? <IoMoonOutline /> : <GrSun className="icon-sun" />}
      </button>
      {isModalOpen && (
        <div className="fixed">
          <div className="modal">
            <ul className="">
              <li>
                <button className="icon-clear">
                  <IoClose onClick={toggleModal} />
                </button>
              </li>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#home">Articles</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
