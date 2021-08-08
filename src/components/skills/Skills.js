import './skills.css';
import { SiJavascript, SiCss3} from "react-icons/si";
import {  DiReact, DiSass, DiMysql, DiGithubBadge, DiNodejs, DiBootstrap, DiMongodb, DiHtml5 } from "react-icons/di";
function Skills({ theme, setTheme }) {
    return (
        <>
        {/* Skills start */}
          <div className="row">
          <div className="skills tab-content">
              <div className="row">
                  {/* skill item start */}
                  <div className={theme === "dark" ? "skillItem outer-shadow-dm hover-in-shadow-dm" : "skillItem outer-shadow hover-in-shadow"}>
                      <DiHtml5 color="red"/>
                  </div>
                  {/* Skill item end */}
                  {/* skill item start */}
                  <div className={theme === "dark" ? "skillItem outer-shadow-dm hover-in-shadow-dm" : "skillItem outer-shadow hover-in-shadow"}>
                  <SiCss3 color="#264de4"/>
                  </div>
                  {/* Skill item end */}
                  {/* skill item start */}
                  <div className={theme === "dark" ? "skillItem outer-shadow-dm hover-in-shadow-dm" : "skillItem outer-shadow hover-in-shadow"}>
                  <SiJavascript color="#F8DD3C"/>
                  </div>
                  {/* Skill item end */}
                  {/* skill item start */}
                  <div className={theme === "dark" ? "skillItem outer-shadow-dm hover-in-shadow-dm" : "skillItem outer-shadow hover-in-shadow"}>
                  <DiReact color="61DAFB"/>
                  </div>
                  {/* Skill item end */}
                  {/* skill item start */}
                  <div className={theme === "dark" ? "skillItem outer-shadow-dm hover-in-shadow-dm" : "skillItem outer-shadow hover-in-shadow"}>
                  <img className="next-icon" src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="" />
                  </div>
                  {/* Skill item end */}
                  {/* skill item start */}
                  <div className={theme === "dark" ? "skillItem outer-shadow-dm hover-in-shadow-dm" : "skillItem outer-shadow hover-in-shadow"}>
                  <DiNodejs color="#68A063" />
                  </div>
                  {/* Skill item end */}
                  {/* skill item start */}
                  <div className={theme === "dark" ? "skillItem outer-shadow-dm hover-in-shadow-dm" : "skillItem outer-shadow hover-in-shadow"}>
                      <DiSass color="#cc6699" />
                  </div>
                  {/* Skill item end */}
                  {/* skill item start */}
                  <div className={theme === "dark" ? "skillItem outer-shadow-dm hover-in-shadow-dm" : "skillItem outer-shadow hover-in-shadow"}>
                  <DiBootstrap color="#553c7B"/>
                  </div>
                  {/* Skill item end */}
                  <div className={theme === "dark" ? "skillItem outer-shadow-dm hover-in-shadow-dm" : "skillItem outer-shadow hover-in-shadow"}>
                      <img className="tw-icon" src="https://icons-for-free.com/iconfiles/png/512/Tailwind-1324888767228371881.png" alt="" />
                  </div>
                  <div className={theme === "dark" ? "skillItem outer-shadow-dm hover-in-shadow-dm" : "skillItem outer-shadow hover-in-shadow"}>
                  <DiMysql color="#00759f" />
                  </div>
                  <div className={theme === "dark" ? "skillItem outer-shadow-dm hover-in-shadow-dm" : "skillItem outer-shadow hover-in-shadow"}>
                      <DiMongodb color="#4DB33D" />
                  </div>
                  <div className={theme === "dark" ? "skillItem outer-shadow-dm hover-in-shadow-dm" : "skillItem outer-shadow hover-in-shadow"}>
                      <DiGithubBadge color="#4DB33D" />
                  </div>
              </div>
          </div>
      </div>
    </>
    )
}

export default Skills
