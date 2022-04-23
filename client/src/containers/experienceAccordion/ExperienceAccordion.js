import React, {useState} from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";
import ProjectCard from "../../components/ProjectCard/ProjectCard.js";
import { projects } from "../../portfolio.js";
import onTheTableGaming from './wordpressxl.png'
import { Fade } from "react-reveal";
import { style } from "glamor";

function ExperienceAccordion(props) {
  const theme = props.theme;

  return (
    <div className="experience-accord" >
      <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
        <Accordion  onChange={({ expanded }) => console.log(expanded)}
                        accordion
                        overrides={{
                          PanelContainer: {
                            style: () => ({
                              outline: `black solid`
                            })},
                          Content: {
                            style: () => ({
                                backgroundColor: `${theme.cardColor}`
                            })
                          }}}
                          >
          {props.sections.map((section) => {
            return (
              <Panel
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}

                
              >
                {section["experiences"].map((experience) => {
                  return (
                    <ExperienceCard experience={experience} theme={theme} />
                  );
                })}
              </Panel>
            );
          })}
            <Panel
                className="accord-panel2"
                title={"Projects"}
                key={"title2"}
              >
      <div className="repo-cards-div-main">
        {projects.data.map((repo) => {
          return <ProjectCard repo={repo} theme={theme} />;
        })}
      </div>
                     </Panel>
                 <Panel
                className="accord-panel3"
                title={"Case Studies"}
                key={"title323"}
                // onChange={({ expanded }) => setrenderIT(!renderIT)}
              >

             {/* {renderIT ?  <DangerousIframe/> : null} */}

             <WordPressProjectCard  theme={theme} />
                </Panel>
                <Panel
                className="accord-panel4"
                title={"Case Studies"}
                key={"title3213"}
              >

                </Panel>
        </Accordion>
      </ThemeProvider>
    </div>
  );
}

function WordPressProjectCard({  theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  const styles = style({
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: "pointer",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          {...styles}
          key={'101'}
          onClick={() => openRepoinNewTab('https://onthetablegaming.com')}
          style={{ backgroundColor: theme.body }}
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.secondaryText }}>
              Game of Thrones Tabletop Community Content Site
            </p>
            
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            Apache Wordpress deploy alongside Node.js with Automated Content Creation from across the Web
          </p>
          <img src={onTheTableGaming} className='wordpress-thumb' />
          <div className="repo-details">
          </div>
        </div>
      </Fade>
    </div>
  );
}


export default ExperienceAccordion;
