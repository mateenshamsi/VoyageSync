import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import LogoSlider from '@/components/LogoSlider';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <LogoSlider />
        <FeaturesSection />
      </main>
      <Footer />
    </>
  );
}