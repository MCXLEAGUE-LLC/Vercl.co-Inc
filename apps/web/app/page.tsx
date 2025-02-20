"use client";

import { InlineSnippet } from "@dub/ui";
import { STAGGER_CHILD_VARIANTS } from "@dub/utils";
import Spline from "@splinetool/react-spline";
import va from "@vercel/analytics";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import { Background, Hero, SubmitForum, Statistics, Pricing, Changelog, AboveMessage } from "@dub/ui";

export default async function Home() {
  return (
<>
      <Background />
      <Hero />
      <SubmitForum />
      <Statistics />
      <Pricing />
      <Changelog />
      <AboveMessage />
</>
  );
}
