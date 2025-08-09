import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import GapSection from '@/components/GapSection';
import ProgramSection from '@/components/ProgramSection';
import FaqSection from '@/components/FaqSection';
import BeginSection from '@/components/BeginSection';
import PartnerScroll from '@/components/PartnerScroll';
import FeedbackSection from '@/components/FeedbackSection';

export default function Home() {
  return (
    <>
    <main>
      <Navbar />
      <section id="hero">
      <HeroSection />
      </section>
      <section id="about">
      <GapSection />
      </section>
      <section id="program">
      <ProgramSection />
      </section>
      <section id="testimonials">
      <FeedbackSection />
      </section>
      <PartnerScroll />
      <FaqSection />
      <BeginSection />
    </main>
    </>
  );
}
