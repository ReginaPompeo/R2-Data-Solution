import Home from './home/page';
import About from './about/page';
import Services from './services/page';
import Team from './team/page';
import Differences from './differences/page';
import Mission from './mission/page';
import Feedback from './feedback/page';
import Footer from './footer/page';
import WhatsAppIcon from './components/whatsapp_icon';
import Navbar from './components/navbar';

export default function LandingPage() {
  return (
   <div>
    <WhatsAppIcon/>
    <Navbar/>
    <div id="home">
      <Home />
    </div>
    <div id="about">
      <About />
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
