import { MdEmail } from "react-icons/md";
import "./contact.css";
const Contact = () => {
  return (
    <section className="contact-us">
      <h1 className="title">
        <MdEmail className="icon" />
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
      </p>
      <div className="flex">
        <form action="">
          <div>
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div style={{marginTop:"2rem"}} className="flex">
            <label htmlFor="massage">Your Message:</label>
            <textarea id="massage" name="massage" required />
          </div>
          <button type="submit" >Submit</button>
        </form>
        <div className="animation"></div>
      </div>
    </section>
  );
};

export default Contact;
