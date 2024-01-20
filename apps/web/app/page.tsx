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

export default function PlaceholderContent() {
  const { domain } = useParams() as { domain: string };
  const [loading, setLoading] = useState(true);
  const onLoad = () => {
    setLoading(false);
  };
  // workarouond to avoid the blinking effect when Spline loads
  const [opacity] = useDebounce(loading ? 0 : 1, 200);

  const [showText] = useDebounce(loading ? false : true, 800);

  return (
    <Background />
  );
}
