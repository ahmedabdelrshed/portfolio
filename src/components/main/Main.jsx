import { ImLink } from "react-icons/im";
import "./main.css";
import { VscGithubInverted } from "react-icons/vsc";
import { IoMdArrowForward } from "react-icons/io";
import { useState } from "react";
import { Projects, projectsTypes } from "../../Data";
import { textSlicer } from "../../utils/functions";
import { AnimatePresence, motion } from "framer-motion";

export const Main = () => {
  const [selectedProjectType, setSelectedProjectType] =
    useState("All Projects");
  const [filteredProjects, setFilteredProjects] = useState(Projects);
  const filterHandler = (e) => {
    setSelectedProjectType(e.target.innerText);
    if (e.target.innerText === "All Projects") {
      setFilteredProjects(Projects);
    } else {
      setFilteredProjects(
        Projects.filter((project) => project.type === e.target.innerText)
      );
    }
  };
  return (
    <main className="flex" id="projects">
      <section className="buttons flex">
        {projectsTypes.map((type) => (
          <button
            key={type}
            className={`${selectedProjectType == type ? "active" : null}`}
            onClick={filterHandler}
          >
            {type}
          </button>
        ))}
      </section>
      <section className="projects flex">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
             transition={{type:"spring" , damping:8,stiffness:50}}
              className="card"
              key={project.id}
            >
              <img src={`${project.image}`} alt="" width={266} />
              <div className="card-content" style={{ width: "266px" }}>
                <h1 className="title">{project.title}</h1>
                <p className="description">
                  {textSlicer(project.description, 123)}
                </p>
                <div className="flex icons">
                  <div className="flex" style={{ gap: "11px" }}>
                    <a href={`${project.url}`} target="_blank">
                      <ImLink />
                    </a>
                    <a href={`${project.github}`} target="_blank">
                      <VscGithubInverted />
                    </a>
                  </div>
                  <a href="" className="flex link">
                    more <IoMdArrowForward style={{ alignSelf: "end" }} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
};
