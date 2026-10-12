import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Work from "@/components/Work";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Philosophy from "@/components/Philosophy";

export default function Home() {
  return (
    <main >
      <Hero />
      <Expertise />
      <Work />
      <Philosophy />
      <Contact />
      <Footer />
    </main>
  );
}
