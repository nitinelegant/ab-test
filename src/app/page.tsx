import Footer from "@/components/footer/Footer";
import GuideSection from "@/components/guide/GuideSection";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import SignUp from "@/components/signup/SignUp";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <GuideSection />
      <SignUp />
      <Footer />
    </>
  );
}
