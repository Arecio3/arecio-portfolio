import './skills.css'

function Skills({ active }) {
    return (
        <>
        {/* Skills start */}
          <div className="row">
          <div className="skills tab-content">
              <div className="row">
                  {/* skill item start */}
                  <div className="skillItem">
                      <p>HTML</p>
                      <div className="progress inner-shadow">
                          <div className="progress-bar" style={{width: `calc(90% - 14px)`}}>
                              <span>90%</span>
                          </div>
                      </div>
                  </div>
                  {/* Skill item end */}
                  {/* skill item start */}
                  <div className="skillItem">
                      <p>JavaScript</p>
                      <div className="progress inner-shadow">
                          <div className="progress-bar" style={{width: `calc(70% - 14px)`}}>
                              <span>70%</span>
                          </div>
                      </div>
                  </div>
                  {/* Skill item end */}
                  {/* skill item start */}
                  <div className="skillItem">
                      <p>CSS</p>
                      <div className="progress inner-shadow">
                          <div className="progress-bar" style={{width: `calc(70% - 14px)`}}>
                              <span>70%</span>
                          </div>
                      </div>
                  </div>
                  {/* Skill item end */}
                  {/* skill item start */}
                  <div className="skillItem">
                      <p>React JS</p>
                      <div className="progress inner-shadow">
                          <div className="progress-bar" style={{width: `calc(55% - 14px)`}}>
                              <span>55%</span>
                          </div>
                      </div>
                  </div>
                  {/* Skill item end */}
                  {/* skill item start */}
                  <div className="skillItem">
                      <p>Next JS</p>
                      <div className="progress inner-shadow">
                          <div className="progress-bar" style={{width: `calc(45% - 14px)`}}>
                              <span>45%</span>
                          </div>
                      </div>
                  </div>
                  {/* Skill item end */}
                  {/* skill item start */}
                  <div className="skillItem">
                      <p>Node JS</p>
                      <div className="progress inner-shadow">
                          <div className="progress-bar" style={{width: `calc(65% - 14px)`}}>
                              <span>65%</span>
                          </div>
                      </div>
                  </div>
                  {/* Skill item end */}
                  {/* skill item start */}
                  <div className="skillItem">
                      <p>Sass</p>
                      <div className="progress inner-shadow">
                          <div className="progress-bar" style={{width: `calc(25% - 14px)`}}>
                              <span>25%</span>
                          </div>
                      </div>
                  </div>
                  {/* Skill item end */}
                  {/* skill item start */}
                  <div className="skillItem">
                      <p>Bootstrap</p>
                      <div className="progress inner-shadow">
                          <div className="progress-bar" style={{width: `calc(50% - 14px)`}}>
                              <span>50%</span>
                          </div>
                      </div>
                  </div>
                  {/* Skill item end */}
                  {/* skill item start */}
                  <div className="skillItem">
                      <p>Tailwind</p>
                      <div className="progress inner-shadow">
                          <div className="progress-bar" style={{width: `calc(20% - 14px)`}}>
                              <span>20%</span>
                          </div>
                      </div>
                  </div>
                  {/* Skill item end */}
                  {/* skill item start */}
                  <div className="skillItem">
                      <p>mySQL</p>
                      <div className="progress inner-shadow">
                          <div className="progress-bar" style={{width: `calc(55% - 14px)`}}>
                              <span>55%</span>
                          </div>
                      </div>
                  </div>
                  {/* Skill item end */}
                  {/* skill item start */}
                  <div className="skillItem">
                      <p>noSQL</p>
                      <div className="progress inner-shadow">
                          <div className="progress-bar" style={{width: `calc(80% - 14px)`}}>
                              <span>80%</span>
                          </div>
                      </div>
                  </div>
                  {/* Skill item end */}
              </div>
          </div>
      </div>
    </>
    )
}

export default Skills
