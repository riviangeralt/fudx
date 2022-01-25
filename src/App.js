import { useRef, useEffect } from 'react';
import './App.css';
import Header from './sections/Header';
import Home from './sections/Home';
import ChooseUs from './sections/ChooseUs';
import Token from './sections/Token';
import Activity from './sections/Activity';
import RoadMap from './sections/RoadMap';
import Team from './sections/Team';
import Faq from './sections/Faq';
import JoinCommunity from './sections/JoinCommunity';
import Footer from './sections/Footer';

function App() {
  const homeRef = useRef(null)
  const chooseRef = useRef(null)
  const tokenRef = useRef(null)
  const activityRef = useRef(null)
  const roadMapRef = useRef(null)
  const teamRef = useRef(null)
  const contactRef = useRef(null)

  const executeScroll = (index) => {
    if (index === 1) {
      homeRef.current.scrollIntoView()
    } else if (index === 2) {
      chooseRef.current.scrollIntoView()
    } else if (index === 3) {
      tokenRef.current.scrollIntoView()
    } else if (index === 4) {
      activityRef.current.scrollIntoView()
    } else if (index === 5) {
      roadMapRef.current.scrollIntoView()
    } else if (index === 6) {
      teamRef.current.scrollIntoView()
    } else {
      contactRef.current.scrollIntoView()
    }
  }
  useEffect(() => {
    executeScroll(1)
  }, []);


  return (
    <>
      <Header
        home={() => executeScroll(1)}
        about={() => executeScroll(2)}
        token={() => executeScroll(3)}
        activity={() => executeScroll(4)}
        roadmap={() => executeScroll(5)}
        team={() => executeScroll(6)}
        contact={() => executeScroll(7)} />
      <Home myRef={homeRef} />
      <div id='content'>
        <ChooseUs myRef={chooseRef} />
        <Token myRef={tokenRef} />
        <Activity myRef={activityRef} />
        <RoadMap myRef={roadMapRef} />
        <Team myRef={teamRef} />
        <Faq />
        <JoinCommunity myRef={contactRef} />
        <Footer />
      </div>
    </>
  );
}

export default App;
