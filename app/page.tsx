import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Header2 from "@/components/header2";
import LandingPage from "@/components/landing";
import Projects from "@/components/projects";
import SlicingWeb from "@/components/slicingWeb";
// import ProjectsOverview from "@/components/projectsOverview";
import ProjectCarousel from "@/components/projects_carousel";
import Image from "next/image";


export default function Home() {
  return (
    <main>
      {/* <Header/> */}
      <Header2/>
      <LandingPage/>
      <About/>
      {/* <ProjectsOverview/> */}
      {/* <ProjectCarousel/> */}
      <Projects/>
      <SlicingWeb/>
      <Contact/>
      <Footer/>
    </main>
  );
}
