import Footer from "@/components/core/Footer";
import Header from "@/components/core/Header";
import Hero from "@/components/core/Hero";
import PostHero from "@/components/core/PostHero";
import Testimonials from "@/components/core/Testimonials";
import Team from "@/components/core/Team";

export default function Home() {
  return (
    <body className="bg-black w-full h-full">
      <Header />
      <Hero />
      <PostHero />
      <Testimonials />
      <Team />
      <Footer />
    </body>
  );
}
