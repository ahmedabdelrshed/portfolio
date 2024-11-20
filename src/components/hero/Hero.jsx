import { MdVerified } from "react-icons/md";
import "./hero.css";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io5";
import { ImFacebook2, ImWhatsapp } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";
const Hero = () => {
  return (
    <section className="hero flex">
      <div className="hero-content">
        <div className="hero-avatar">
          <img src="./avatar-img.png" className="avatar" alt="" />
          <MdVerified className="avatar-icon" />
        </div>
        <h1 className="title">
          Software Developer,
          <br /> React JS, TypeScript
        </h1>
        <p className="sub-title">
          I&apos;m a passionate and dedicated software developer with a strong
          foundation in React JS, TypeScript, and Node.js. I have experience
          working with various teams and projects, and I&apos;m always eager to
          learn and grow. I&apos;m currently available for freelance
          opportunities or consulting projects. Feel free to reach out if
          you&apos;d like to discuss a project or hire me!
        </p>
        <div className="social-icons flex">
          <a href="">
            <ImFacebook2 />{" "}
          </a>
          <a href="">
            <SiLinkedin />{" "}
          </a>
          <a href="">
            <ImWhatsapp />{" "}
          </a>
          <a href="">
            <VscGithubInverted />{" "}
          </a>
        </div>
      </div>
      <div className="hero-image animation">Animation</div>
    </section>
  );
};

export default Hero;
