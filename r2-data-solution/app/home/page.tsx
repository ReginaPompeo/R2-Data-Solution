import Home from './hero/page';
import Services from './information_services/page';
import Team from './team/page';
import Differences from './differences/page';
import Mission from './mission/page';
import Feedback from './feedback/page';
import Introduction from './introduction/page';

export default function LandingPage() {
  return (
   <div>
    <div id="home">
      <Home />
    </div>
    <div id="introduction">
      <Introduction />
    </div>
    <div id="services">
      <Services />
    </div>
    <div id="team">
      <Team/>
    </div>
    <div id="differences">
      <Differences/>
    </div>
    <div id="mission">
      <Mission/>
    </div>
    <div id="feedback">  
      <Feedback/>
    </div>
   </div>
  );
}
