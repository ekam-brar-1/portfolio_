import Approach from "@/components/Approach";
import CurrentWork from "@/components/CurrentWork";


import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { Certificate } from "crypto";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <main className="bg-black relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* Navigation */}
        <FloatingNav navItems={navItems} />

        {/* Hero Section */}
        <Hero />

        {/* Grid Section */}
        <Grid />

        {/* Skills Section */}
        <Skills />

        {/* Recent Projects Section */}
        <RecentProjects />

        {/* Uncomment Client if required */}
  
<CurrentWork />
        {/* Certifications Section */}
        <Certifications />

        {/* Approach Section */}
        <Approach />

        {/* Footer Section */}
        <Footer />
      </div>
    </main>
  );
}
