import { MdEmail } from "react-icons/md";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneanimation from "../../animation/done.json";
import contact from "../../animation/contact.json";
const Contact = () => {
  const [state, handleSubmit] = useForm("mzzbvoep");

  return (
    <section className="contact-us" id='contact'>
      <h1 className="title">
        <MdEmail className="icon" />
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
      </p>
      <div style={{justifyContent:"space-between"}} className="flex">
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="off"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div style={{ marginTop: "2rem" }} className="flex">
            <label htmlFor="massage">Your Message:</label>
            <textarea id="massage" name="message" required />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting ..." : "Submit"}
          </button>
          {state.succeeded && (
            <p className="flex" style={{ fontSize: "16px", marginTop: "1rem" }}>
              <Lottie animationData={doneanimation} style={{height:"55px"}} loop={false}/>
              Your Message Send Successfully , Thanks for you Contact !!!!! 
            </p>
          )}
        </form>
        <div className="animation"> <Lottie animationData={contact} className="contact-animation" style={{height:355}}/></div>
      </div>
    </section>
  );
};

export default Contact;
