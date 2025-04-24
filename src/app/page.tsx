import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Activities from '@/components/Activities';
import Selected from '@/components/Selected';
import Reflection from '@/components/Reflection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Activities />
      <Selected />
      <Reflection />
      <Footer />
    </main>
  );
}
