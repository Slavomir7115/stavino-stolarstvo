import Herobanner from "@/components/Herobanner";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
export default function Home() {
  return (
    <main>
      <Herobanner />
      <Services />
      <Features />
      <Gallery />
      <Process />
      <ContactForm />
    </main>
  );
}
