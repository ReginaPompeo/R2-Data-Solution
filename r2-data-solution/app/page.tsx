import Home from './home/page';
import Services from './information_services/page';
import Team from './team/page';
import Differences from './differences/page';
import Mission from './mission/page';
import Feedback from './feedback/page';
import Footer from './components/footer/footer';
import WhatsAppIcon from './components/whatsapp_icon/whatsapp_icon';
import Navbar from './components/navbar/navbar';
import Introduction from './introduction/page';

export default function LandingPage() {
  return (
   <div>
    <WhatsAppIcon/>
    <Navbar/>
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
    <Footer/>
   </div>
  );
}
