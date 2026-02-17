import { Suspense } from "react";
import CurtainReveal from "@/components/CurtainReveal";
import Navbar from "@/components/Navbar";
import FloatingParticles from "@/components/FloatingParticles";
import Hero from "@/components/Hero";
import Invitation from "@/components/Invitation";
import EventDetails from "@/components/EventDetails";
import Countdown from "@/components/Countdown";
import Families from "@/components/Families";
import Blessings from "@/components/Blessings";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Suspense>
      <CurtainReveal>
        <FloatingParticles />
        <Navbar />
        <main>
          <Hero />
          <Invitation />
          <EventDetails />
          <Countdown />
          <Families />
          <Blessings />
        </main>
        <Footer />
      </CurtainReveal>
    </Suspense>
  );
}
