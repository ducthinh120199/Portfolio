import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Feedback from "@/components/Feedback";
import TikTok from "@/components/TikTok";
import Contact from "@/components/Contact";
import { site } from "@/data/site";
import { getTikTokEmbeds } from "@/lib/tiktok";

export default async function Home() {
  const tiktokVideos = await getTikTokEmbeds(site.tiktok.videoUrls);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Feedback />
      <TikTok videos={tiktokVideos} />
      <Contact />
    </>
  );
}
