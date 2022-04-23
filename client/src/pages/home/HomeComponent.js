import React from 'react';
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import lottieArrow from './arrow.json'

function Home(props) {

  // const [renderTime, setRenderTime] = useState(false);



  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Greeting theme={props.theme} />
 {/* <Player
    autoplay
    className={'lottiearrow'}
    loop={true}
    speed={0.8}
    src={lottieArrow}
    style ={{ position: "absolute", bottom: 0, right: 0, height: '10vh', width: '10vw', padding: '1rem'}}
  >
    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
  </Player> */}
      <Skills theme={props.theme} />
      {/* <Footer theme={props.theme} /> */}
    </div>
  );
}

export default Home;
