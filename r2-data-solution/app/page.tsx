import Home from './home/page';
import About from './about/page';
import Services from './services/page';
import Team from './team/page';
import Differences from './differences/page';

export default function LandingPage() {
  return (
   <div>
    <Home/>
    <About/>
    <Services/>
    <Team/>
    <Differences/>
   </div>
  );
}
