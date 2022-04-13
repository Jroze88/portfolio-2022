import React from "react";
import "./Contact.css";
import lottieFish from 'lott-fish.json';
import lottiewave from 'wave.json';
import Player from '@lottiefiles/react-lottie-player'



function WavePlayer() {
  return  (
    <Player
    autoplay
    loop={true}
    speed={0.8}
    src={lottiewave}
    style ={{ position: "absolute", bottom: 0, right: 0, height: '10vh', width: '10vw'}}
  >
    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
  </Player>
  )
}

export default function Contact() {
  const [renderTime, setRenderTime] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRenderTime(true)
    }, 3000);
  }, []);


  return (
    <div className="main contact-margin-top" id="contact">
     {renderTime && <Player
    autoplay
    loop={false}  
    speed={0.8}
    src={lottieFish}
    style ={{ position: "absolute", bottom: 0, right: 0, height: '10vh', width: '10vw'}}
  >
    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
  </Player>}
  <WavePlayer />
    </div>
  );
}
