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
import mtgRocks from './mtgrocksxl.png'
import cropped from './crop.gif'
import wideCrop from './wide.gif'

function ExperienceAccordion(props) {
  const theme = props.theme;
  function openRepoinNewTabM(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

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
                title={"Wordpress"}
                key={"title323"}
                // onChange={({ expanded }) => setrenderIT(!renderIT)}
              >

             {/* {renderIT ?  <DangerousIframe/> : null} */}

             <WordPressProjectCard  theme={theme} />
             <WordPressProjectCard2  theme={theme} />
                </Panel>
                <Panel
                className="accord-panel4"
                title={"Latest (App Builder)"}
                key={"title3213"}
              >

    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          key={'101'}
          onClick={() => openRepoinNewTabM('https://github.com/Jroze88/build-app-UI-react-native')}
          style={{ backgroundColor: theme.body }}
        >
          <div  style={{margin: '25px'}} className="repo-name-div">
            <p  className="repo-name" style={{ color: theme.secondaryText, margin: '25px' }}>
            Desktop App to build mobile app UI's
            </p>
            
          </div>
          <p  className="repo-description" style={{ color: theme.text, margin: '25px' }}>
          First foray into desktop apps. Electron App running a react-native layout with draggable components to add/change/customize and export for use
          </p>
          <img style={{margin: '25px'}} alt={'wide display of the app'} src={cropped} className='wordpress-thumb' />
          <div style={{margin: '25px'}} className="repo-details">
          </div>
        </div>
      </Fade>
      <Fade bottom duration={2000} distance="40px">
        <div
          key={'101'}
          onClick={() => openRepoinNewTabM('https://github.com/Jroze88/build-app-UI-react-native')}
          style={{ backgroundColor: theme.body }}
        >
          <img style={{margin: '25px'}} alt={'cropped display of the app'} src={wideCrop} className='wordpress-thumb' /> 
          </div>
          </Fade>
    </div>

                </Panel>
        </Accordion>
      </ThemeProvider>
    </div>
  );
}




//////////////////////////////////////////////// These components need modularization at some point //////////////////////////////

function WordPressProjectCard({  theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  const styles = style({
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    marginBottom: '24px',
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
          <img alt={'onthetablegaming.com wordpress homepage'} src={onTheTableGaming} className='wordpress-thumb' />
          <div className="repo-details">
          </div>
        </div>
      </Fade>
    </div>
  );
}

function WordPressProjectCard2({  theme }) {
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
          onClick={() => openRepoinNewTab('https://mtgrocks.com')}
          style={{ backgroundColor: theme.body }}
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.secondaryText }}>
              MTG Rocks
            </p>
            
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            Simple WordPress layout with components like Elementor
          </p>
          <img alt={'mtg rocks wordpress homepage'} src={mtgRocks} className='wordpress-thumb' />
          <div className="repo-details">
          </div>
        </div>
      </Fade>
    </div>
  );
}


export default ExperienceAccordion;
