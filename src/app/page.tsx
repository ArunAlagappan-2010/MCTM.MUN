"use client";

import { useState } from "react";
import FogHero from "@/components/FogHero";
import HeroIntro from "@/components/HeroIntro";
import HomePreview from "@/components/HomePreview";
import IntroLoader from "@/components/IntroLoader";

export default function Home() {
  const [revealing, setRevealing] = useState(false);

  return (
    <>
      <IntroLoader onSettle={() => setRevealing(true)} />
      <FogHero revealing={revealing}>
        <HeroIntro />
      </FogHero>
      <HomePreview />
    </>
  );
}
