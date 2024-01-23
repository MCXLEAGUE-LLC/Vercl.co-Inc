"use client";

import Demo from "@/web/ui/home/demo";
import Globe from "@/web/ui/home/globe";
import Stats from "@/web/ui/home/stats";
import Features from "@/web/ui/home/features";
import Hero from "@/web/ui/home/hero";
import Logos from "@/web/ui/home/logos";
import OSS from "@/web/ui/home/oss";
import Testimonials from "@/ui/home/testimonials";
import Changelog from "@/ui/home/changelog";
import { Background } from "@dub/ui";

export default async function Home() {
  return (
    <>
      <Hero />
      <Demo />
      <Logos />
      <Globe />
      <Stats />
      <Features />
      <Testimonials />
      <Changelog />
      <OSS />
    </>
  );
}
