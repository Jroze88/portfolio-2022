import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";
import ProjectCard from "../../components/ProjectCard/ProjectCard.js";
import { projectsHeader, projects, socialMediaLinks } from "../../portfolio.js";


function ExperienceAccordion(props) {
  const theme = props.theme;

  return (
    <div className="experience-accord">
      <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
        <Accordion onChange={({ expanded }) => console.log(expanded)}>
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
                title={"Cases"}
                key={"title2"}
              >
                
                </Panel>
        </Accordion>
      </ThemeProvider>
    </div>
  );
}

export default ExperienceAccordion;
