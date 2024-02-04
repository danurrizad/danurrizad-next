import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import LandingPage from "@/components/landing";
import Projects from "@/components/projects";
import Image from "next/image";


export default function Home() {
  return (
    <main>
      <Header/>
      <LandingPage/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  );
}
