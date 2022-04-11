import React from "react";
import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import routes from "./routes.js";
import "./stylin/common.css";
import "./stylin/jquery.fullPage.css";
// import Svg from "./store/Svg/Svg.js";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const timeout = 1000;

export default class Design extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedUp: false
    };
  }

  componentDidMount = () => {
    this.setState(
      {
        loadedUp: true
      },
      () => {
        console.log("done");
      },
      1000
    );
  };

  render() {
    const thisRoute = routes[0];
    let { loadedUp } = this.state;

    return (
      <main id="barba-wrapper" aria-live="polite">
        <div className="barba-container" data-namespace="top">
          <div
            className="fullpage fullpage-wrapper"
            id="js-fullpage"
            style={{
              height: "100%"
            }}
          >
            <div
              className="section fp-section fp-table fp-section-1 active fp-completely"
              data-anchor="top"
              style={{ height: "754px" }}
            >
              <div className="fp-tableCell" style={{ height: "754px" }}>
                <div className="fullpage__slide">
                  <div className="title title--top">
                    <h1 className="title__text js-letter">
                      Jano
                      <br />
                      Roze
                    </h1>
                    <div className="border js-letter">
                      <span />
                      <span className="js-letter" />
                    </div>
                    <p className="title__lead js-letter">
                      Full Stack Developer /<br />
                      Markup Engineer.
                    </p>
                  </div>
                  <div className="moon">
                    <div
                      className="section moon__img js-parallax-moon"
                      style={{
                        transform: "translate3d(0px, 0px, 0px)",
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                        pointerEvents: "none",
                        position: "relative",
                        display: "block",
                        left: "0",
                        top: "0"
                      }}
                    >
                      <TransitionGroup component={null}>
                        <CSSTransition
                          in={this.state.loadedUp}
                          unmountOnExit
                          timeout={1000}
                          classNames="parallax-outer"
                          key={1}
                        >
                          <Parallax
                            offsetYMax={100}
                            offsetYMin={-100}
                            slowerScrollRate
                            tagInner={"div"}
                            className="section moon__front moon1 layer"
                            data-depth="1.2"
                            style={{}}
                          >
                            {/* <div className="section moon__text-wrap"> */}
                              <p
                                className="section moon__text js-moon"
                                data-depth="1.5"
                                style={{
                                  opacity: 1,
                                  transform: "translateX(0%) translateZ(0px)"
                                }}
                              >
                                PORTFOLIO
                              </p>
                            {/* </div> */}
                          </Parallax>
                        </CSSTransition>
                        <CSSTransition
                          key={2}

                          timeout={1000}
                          classNames="parallax-outer"
                        >
                          <Parallax
                            offsetYMax={100}
                            offsetYMin={-100}
                            slowerScrollRate
                            tagInner={"div"}
                            className="section moon__front moon2 layer"
                            data-depth="0.8"
                          >
                            {/* <div
                              className="cloud cloud--front1 js-moon"
                              style={{
                                opacity: "1",
                                transform: "translateX(0%) translateZ(0px)"
                              }}
                            > */}
                              <img
                                className={"svg-component"}
                                src={thisRoute.clouds[0]}
                                alt="cloud"
                              />
                            {/* </div> */}
                          </Parallax>
                        </CSSTransition>
                        <CSSTransition
                          key={3}

                          timeout={1000}
                          classNames="parallax-outer"
                        >
                          <Parallax
                            offsetYMax={100}
                            offsetYMin={-100}
                            slowerScrollRate
                            tagInner={"div"}
                            className="section moon__back moon3 layer"
                            data-depth="0.4"
                          >
                            {/* <div
                              className="cloud cloud--back2 js-moon"
                              style={{
                                opacity: 1,
                                transform: "translateX(0%) translateZ(0px)"
                              }}
                            > */}
                              <img
                                className={"svg-component"}
                                src={thisRoute.clouds[1]}
                                alt="cloud"
                              />
                            {/* </div> */}
                          </Parallax>
                        </CSSTransition>
                        <CSSTransition
                          key={4}

                          timeout={1000}
                          classNames="parallax-outer"
                        >
                          <Parallax
                            offsetYMax={100}
                            offsetYMin={-100}
                            slowerScrollRate
                            tagInner={"div"}
                            className="section moon__front moon4 layer"
                            data-depth="0.6"
                          >
                            {/* <div
                              className="cloud cloud--front2 js-moon"
                              style={{
                                opacity: 1,
                                transform: "translateX(0%) translateZ(0px)"
                              }}
                            > */}
                              <img
                                className={"svg-component"}
                                src={thisRoute.clouds[2]}
                                alt="cloud"
                              />
                            {/* </div> */}
                          </Parallax>
                        </CSSTransition>
                        <CSSTransition
                          key={5}

                          timeout={1000}
                          classNames="parallax-outer"
                        >
                          <Parallax
                            offsetYMax={100}
                            offsetYMin={-100}
                            slowerScrollRate
                            tagInner={"div"}
                            className="section moon__back moon5 layer"
                            data-depth="0.5"
                          >
                            <img
                              className="js-moon"
                              src={thisRoute.center}
                              alt="moon"
                              style={{
                                opacity: "1",
                                transform: "translateX(0%) translateZ(0px)"
                              }}
                            />
                          </Parallax>
                        </CSSTransition>
                        <CSSTransition
                          key={6}

                          timeout={1000}
                          classNames="parallax-outer"
                        >
                          <Parallax
                            offsetYMax={100}
                            offsetYMin={-100}
                            slowerScrollRate
                            tagInner={"div"}
                            className="section moon__front  moon6 layer"
                            data-depth="0.7"
                          >
                            {/* <div
                              className="cloud cloud--front3 js-moon"
                              style={{
                                opacity: 1,
                                transform: "translateX(0%) translateZ(0px)"
                              }}
                            > */}
                              <img
                                className={"svg-component"}
                                src={thisRoute.clouds[3]}
                                alt="cloud"
                              />
                            {/* </div> */}
                          </Parallax>
                        </CSSTransition>
                        <CSSTransition
                          key={7}

                          timeout={1000}
                          classNames="parallax-outer"
                        >
                          <Parallax
                            offsetYMax={100}
                            offsetYMin={-100}
                            slowerScrollRate
                            tagInner={"div"}
                            className="section moon__back moon7 layer"
                            data-depth="0.3"
                          >
                            {/* <div
                              className="cloud cloud--back1 js-moon"
                              style={{
                                opacity: 1,
                                transform: "translateX(0%) translateZ(0px)"
                              }}
                            > */}
                              <img
                                className={"svg-component"}
                                src={thisRoute.clouds[4]}
                                alt="cloud"
                              />
                            {/* </div> */}
                          </Parallax>
                        </CSSTransition>
                      </TransitionGroup>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div
              className="section fp-section fp-table fp-section-2"
              data-anchor="reile"
              style={{ height: "754px" }}
            >
              <div className="fp-tableCell" style={{ height: "754px" }}>
                <div className="fullpage__slide">
                  <div className="title">
                    <h2
                      className="title__text js-letter"
                    
                    >
                      Hair Space
                      <br />
                      REILE
                    </h2>
                    <div
                      className="border js-letter"
                    
                    >
                      <span></span>
                      <span
                        className="js-letter"
                      
                      ></span>
                    </div>
                    <p
                      className="title__lead js-letter"
                    
                    >
                      website
                    </p>
                    <div
                      className="btn-wrap js-letter"
                    
                    >
                      <a className="btn" href="./reile.html">
                        Show me more
                      </a>
                    </div>
                  </div>
                  <a
                    className="image image--works"
                    href="/reile.html"
                    style={{ transform: "scale(1) translateX(0%) translateZ(0px)" }}
                  >
                    <div className="image__over">
                      <div
                        className="image__cover"
                        style={{ transform: "translateX(110%) translateZ(0px)" }}
                      ></div>
                      <div
                        className="image__cover"
                        style={{ transform: "translateX(110%) translateZ(0px)" }}
                      ></div>
                    </div>
                    <div className="page-num">
                      <p style={{ transform: "translateY(0%) translateZ(0px)" }}>01</p>
                    </div>
                  </a>
                </div>
              </div>
            </div> */}
            {/* <div
              className="section fp-section fp-table fp-section-3"
              data-anchor="about"
              style={{ height: "754px" }}
            >
              <div className="fp-tableCell" style={{ height: "754px" }}>
                <div className="fullpage__slide">
                  <div className="title">
                    <h2
                      className="title__text js-letter"
                    
                    >
                      About Me
                    </h2>
                    <div
                      className="border js-letter"
                    
                    >
                      <span></span>
                      <span
                        className="js-letter"
                      
                      ></span>
                    </div>
                    <p
                      className="title__lead js-letter"
                    
                    >
                      I love Design, Technology,
                      <br />
                      and Story.
                    </p>
                    <div
                      className="btn-wrap js-letter"
                    
                    >
                      <a className="btn" href="./about.html">
                        Show me more
                      </a>
                    </div>
                  </div>
                  <a
                    className="image image--about"
                    href="./about.html"
                    style={{ transform: "scale(1) translateX(0%) translateZ(0px)" }}
                  >
                    <div className="image__over">
                      <div
                        className="image__cover"
                        style={{ transform: "translateX(110%) translateZ(0px)" }}
                      ></div>
                      <div
                        className="image__cover"
                        style={{ transform: "translateX(110%) translateZ(0px)" }}
                      ></div>
                    </div>
                    <div className="page-num">
                      <p style={{ transform: "translateY(0%) translateZ(0px)" }}>02</p>
                    </div>
                  </a>
                </div>
              </div>
            </div> */}
            {/* <div
              className="section fp-section fp-table fp-section-4"
              data-anchor="contact"
              style={{ height: "754px" }}
            >
              <div className="fp-tableCell" style={{ height: "754px" }}>
                <div className="fullpage__slide">
                  <div className="title">
                    <h2
                      className="title__text js-letter"
                    
                    >
                      Get In Touch
                    </h2>
                    <div
                      className="border js-letter"
                    
                    >
                      <span></span>
                      <span
                        className="js-letter"
                      
                      ></span>
                    </div>
                    <ul>
                      <li
                        className="js-letter"
                      
                      >
                        <a href="mailto:Jano609@gmail.com">Jano609@gmail.com</a>
                      </li>
                      <li
                        className="js-letter"
                      
                      >
                        <a href="https://www.wantedly.com/users/48483598" target="_blank">
                          Wantedly
                        </a>
                      </li>
                      <li
                        className="js-letter"
                      
                      >
                        <a href="https://twitter.com/Goldi69s" target="_blank">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://dribbble.com/Jano_Roze" target="_blank">
                          <i className="fab fa-dribbble"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="image image--contact"
                    style={{ transform: "scale(1) translateX(0%) translateZ(0px)" }}
                  >
                    <div className="image__over">
                      <div
                        className="image__cover"
                        style={{ transform: "translateX(110%) translateZ(0px)" }}
                      ></div>
                      <div
                        className="image__cover"
                        style={{ transform: "translateX(110%) translateZ(0px)" }}
                      ></div>
                    </div>
                    <div className="page-num">
                      <p style={{ transform: "translateY(0%) translateZ(0px)" }}>03</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <p className="scrollDown" style={{ transform: "translateY(0%)" }}>
            SCROLLDOWN
          </p>
          <div className="moon-background">
            <div className="moonlight">
              <div
                className="moonlight__wrap js-parallax-moonlight"
                style={{
                  transform: "translate3d(0px, 0px, 0px) rotate(0.0001deg)",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  position: "absolute",
                  pointerEvents: "none"
                }}
              >
                {/* <div
                  className="layer moonlight__img"
                  data-depth="0.2"
                  style={{
                    transform: "translate3d(-11.7px, 7.9px, 0px)",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    position: "absolute",
                    display: "block",
                    left: "0px",
                    top: "0px"
                  }}
                ></div> */}
              </div>
            </div>
          </div>
          {/* <div
            className="star js-parallax-star"
            style={{
              transform: "translate3d(0px, 0px, 0px) rotate(0.0001deg)",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              pointerEvents: "none"
            }}
          >
            <div
              className="layer"
              data-depth="0.1"
              style={{
                transform: "translate3d(-5.8px, 4.8px, 0px",
                transformStyle: "'preserve-3d'",
                backfaceVisibility: "'hidden'",
                position: "'relative'",
                display: "block",
                left: "0px",
                top: "0px"
              }}
            >
              <div className="star__img">
                <Svg className={'svg-component'} svg="./assets/img/star.svg" />
              </div>
            </div>
          </div> */}
          <div className="sky-color" />
        </div>
      </main>
    );
  }
}
