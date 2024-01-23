"use client";

import { InlineSnippet } from "@dub/ui";
import { STAGGER_CHILD_VARIANTS } from "@dub/utils";
import Spline from "@splinetool/react-spline";
import va from "@vercel/analytics";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import { Background } from "@dub/ui";

export default async function Enterprise() {
  return (
<>
    <Background />
<div className="bg-gray-50">
  <div className="bg-white py-20 sm:py-40">
    <h1 className="mt-5 text-center font-display text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]">
      Enterpise is coming soon
    </h1>
  </div>
  </div>
</>
  );
}
