import Home from './home/page';
import WhatsAppIcon from './components/whatsapp_icon/whatsapp_icon';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';


export default function LandingPage() {
  return (
   <div>
    <WhatsAppIcon/>
    <Navbar/>
    <div id="home">
      <Home />
    </div>
    <Footer/>
   </div>
  );
}
