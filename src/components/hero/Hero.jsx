import { MdVerified } from "react-icons/md";
import "./hero.css";
import { ImFacebook2, ImWhatsapp } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";
import Lottie from "lottie-react";
import dev from "../../animation/developr.json";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero flex" id='about'>
      <div className="hero-content">
        <div className="hero-avatar">
          <motion.img
            initial={{ transform: "scale(0,0)" }}
            animate={{ transform: "scale(1,1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 80 }}
            src="./avatar-img.webp"
            className="avatar"
            alt=""
          />
          <MdVerified className="avatar-icon" />
        </div>
        <motion.h1
          initial={{ transform: "scale(0,0)" }}
          animate={{ transform: "scale(1,1)" }}
          transition={{ duration: 1, ease: "linear " }}
          className="title"
        >
          Software Developer, React JS, TypeScript
        </motion.h1>
        <p className="sub-title">
          I&apos;m a passionate and dedicated software developer with a strong
          foundation in React JS, TypeScript, and Node.js. I have experience
          working with various teams and projects. I&apos;m currently available
          for freelance opportunities or consulting projects. Feel free to reach
          out if you&apos;d like to discuss a project or hire me!
        </p>
        <div className="social-icons flex">
          <a
            href="https://www.facebook.com/profile.php?id=100024575770751&mibextid=ZbWKwL"
            target="_blank"
          >
            <ImFacebook2 />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-abdelrashed"
            target="_blank"
          >
            <SiLinkedin />{" "}
          </a>
          <a href="https://wa.me/+201090281995" target="_blank">
            <ImWhatsapp />{" "}
          </a>
          <a href="https://github.com/ahmedabdelrshed" target="_blank">
            <VscGithubInverted />{" "}
          </a>
        </div>
      </div>
      <div className="hero-image animation">
        <Lottie animationData={dev} />
      </div>
    </section>
  );
};

export default Hero;
