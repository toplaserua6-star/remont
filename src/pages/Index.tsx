import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { Advantages } from "@/components/Advantages";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Problems />
      <Advantages />
      <Services />
      <Portfolio />
      <Reviews />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
