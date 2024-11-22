import "./footer.css";
const Footer = () => {
  return (
    <footer className="flex">
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
      </ul>
      <p>&copy; 2024 My Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
