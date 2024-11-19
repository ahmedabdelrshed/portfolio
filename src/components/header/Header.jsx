import { useState } from "react";
import "./header.css";
import { IoClose, IoMoonOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
        </ul>
      </nav>
      <button className="icon">
        <IoMoonOutline />
      </button>
      {isModalOpen && (
        <div className="fixed">
          <div className="modal">
            <ul className="">
              <li>
              <button className="icon-clear"><IoClose  onClick={toggleModal} /></button>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Articles</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
