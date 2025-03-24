import Home from './home/page';
import About from './about/page';
import Services from './services/page';
import Team from './team/page';

export default function LandingPage() {
  return (
   <div>
    <Home/>
    <About/>
    <Services/>
    <Team/>
   </div>
  );
}
