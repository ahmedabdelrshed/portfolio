import { ImLink } from "react-icons/im";
import "./main.css";
import { VscGithubInverted } from "react-icons/vsc";
import { IoMdArrowForward } from "react-icons/io";
export const Main = () => {
  return (
    <main className="flex">
      <section className="buttons flex">
        <button className="active">All Projects</button>
        <button>HTML & CSS</button>
        <button>JavaScript</button>
        <button>React with JS</button>
        <button>React with TS</button>
      </section>
      <section className="projects flex">
        <div className="card">
          <img src="./online-store.png" alt="" width={266}/>
          <div className="card-content" style={{width:"266px"}}>
            <h1 className="title">Online Store</h1>
            <p className="description">
              Lorem ipsum dolM sit amet consectetur elit adjptsjctng . Ex dolor
              in. accusantrum laudanttum accusamus.
            </p>
            <div className="flex icons">
            <div className="flex" style={{gap:"11px"}}>
            <a href="">
                <ImLink />
              </a>
              <a href="">
                <VscGithubInverted />
              </a>
            </div>
              <a  href="" className="flex link">
                more <IoMdArrowForward style={{alignSelf:"end"}} />
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="./online-store.png" alt="" width={266}/>
          <div className="card-content" style={{width:"266px"}}>
            <h1 className="title">Online Store</h1>
            <p className="description">
              Lorem ipsum dolM sit amet consectetur elit adjptsjctng . Ex dolor
              in. accusantrum laudanttum accusamus.
            </p>
            <div className="flex icons">
            <div className="flex" style={{gap:"11px"}}>
            <a href="">
                <ImLink />
              </a>
              <a href="">
                <VscGithubInverted />
              </a>
            </div>
              <a  href="" className="flex link">
                more <IoMdArrowForward style={{alignSelf:"end"}} />
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="./online-store.png" alt="" width={266}/>
          <div className="card-content" style={{width:"266px"}}>
            <h1 className="title">Online Store</h1>
            <p className="description">
              Lorem ipsum dolM sit amet consectetur elit adjptsjctng . Ex dolor
              in. accusantrum laudanttum accusamus.
            </p>
            <div className="flex icons">
            <div className="flex" style={{gap:"11px"}}>
            <a href="">
                <ImLink />
              </a>
              <a href="">
                <VscGithubInverted />
              </a>
            </div>
              <a  href="" className="flex link">
                more <IoMdArrowForward style={{alignSelf:"end"}} />
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="./online-store.png" alt="" width={266}/>
          <div className="card-content" style={{width:"266px"}}>
            <h1 className="title">Online Store</h1>
            <p className="description">
              Lorem ipsum dolM sit amet consectetur elit adjptsjctng . Ex dolor
              in. accusantrum laudanttum accusamus.
            </p>
            <div className="flex icons">
            <div className="flex" style={{gap:"11px"}}>
            <a href="">
                <ImLink />
              </a>
              <a href="">
                <VscGithubInverted />
              </a>
            </div>
              <a  href="" className="flex link">
                more <IoMdArrowForward style={{alignSelf:"end"}} />
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="./online-store.png" alt="" width={266}/>
          <div className="card-content" style={{width:"266px"}}>
            <h1 className="title">Online Store</h1>
            <p className="description">
              Lorem ipsum dolM sit amet consectetur elit adjptsjctng . Ex dolor
              in. accusantrum laudanttum accusamus.
            </p>
            <div className="flex icons">
            <div className="flex" style={{gap:"11px"}}>
            <a href="">
                <ImLink />
              </a>
              <a href="">
                <VscGithubInverted />
              </a>
            </div>
              <a  href="" className="flex link">
                more <IoMdArrowForward style={{alignSelf:"end"}} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
