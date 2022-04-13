import React, {useState} from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";
import ProjectCard from "../../components/ProjectCard/ProjectCard.js";
import { projectsHeader, projects, socialMediaLinks } from "../../portfolio.js";


function ExperienceAccordion(props) {
  const theme = props.theme;
  const [renderIT, setrenderIT] = useState(false)

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
                title={"Interactive Workflow"}
                key={"title323"}
                onChange={({ expanded }) => setrenderIT(!renderIT)}
              >

             {renderIT ?  <DangerousIframe/> : null}
             
                
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

function DangerousIframe(props) {
  

  return (
    <div className='dangerous-iframe' dangerouslySetInnerHTML={{ __html: "<iframe style={width: 600px; height: 600px; background-color: grey;} src='https://visual-argo-workflows.vercel.app/' />"}} />
  )

}


export default ExperienceAccordion;
