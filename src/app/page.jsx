
import HeroSection from './Components/HeroSection/Page'
import  AboutUs from './Components/AboutUs/Page'
import CircularSkills from './Components/CircularSkills/Page'
import BackgroundAnimation from './Components/BackgroundAnimaion'
import {WorkExperience} from './Components/WorkExperience/Page'
import WorkProcess from './Components/Projects/Page'
import Contact from './Components/Contact/Page'
import Footer from './Components/Footer/Page'

export default function Home() {
  return (
    
       <main className="relative w-full  min-h-full">
      <BackgroundAnimation />
      <div className="relative z-10">
      <HeroSection />
      <AboutUs />
     
      <CircularSkills />
      <WorkExperience />
      <WorkProcess/>
    <Contact/>
   <Footer/>
    
      </div>
    </main>
  )
}