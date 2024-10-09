import GuideSection from "@/components/guide/GuideSection";
import Hero from "@/components/hero/Hero";
import WithLayout from "@/components/WithLayout";

const Home = () => {
  return (
    <>
      <Hero />
      <GuideSection />
    </>
  );
};

export default WithLayout(Home);
