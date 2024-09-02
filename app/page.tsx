import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Header2 from "@/components/header2";
import LandingPage from "@/components/landing";
import Projects from "@/components/projects";
// import ProjectsOverview from "@/components/projectsOverview";
import Image from "next/image";


export default function Home() {
  return (
    <main>
      {/* <Header/> */}
      <Header2/>
      <LandingPage/>
      <About/>
      {/* <ProjectsOverview/> */}
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  );
}
