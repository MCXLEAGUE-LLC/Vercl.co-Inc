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

export default async function Home() {
  return (
    <>
      <Background />
<div className="mx-auto mb-10 mt-12 max-w-md px-2.5 text-center sm:max-w-lg sm:px-0">
  <a
    className="group mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.1)] backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50"
    href="/blog/company"
  >
    <p className="text-sm font-semibold text-gray-700 [text-wrap:balance]">
      Unveiling Dub.co's New Chapter
    </p>
    <div className="group relative flex items-center">
      <svg
        className="absolute transition-all group-hover:translate-x-1 group-hover:opacity-0 -ml-1 h-3.5 w-3.5"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 16"
        width={16}
        height={16}
      >
        <path
          fillRule="evenodd"
          d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"
        />
      </svg>
      <svg
        className="-ml-1 h-3.5 w-3.5 absolute opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 16"
        width={16}
        height={16}
      >
        <path
          fillRule="evenodd"
          d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z"
        />
      </svg>
    </div>
  </a>
  <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]">
    Short Links With
    <br />
    <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
      Superpowers
    </span>
  </h1>
  <h2 className="mt-5 text-gray-600 sm:text-xl">
    Dub.co is the open-source link management infrastructure for modern
    marketing teams.
  </h2>
  <div className="mx-auto mt-5 flex max-w-fit space-x-4">
    <a
      href="https://app.dub.co"
      className="rounded-full border border-black bg-black px-5 py-2 text-sm text-white shadow-lg transition-all hover:bg-white hover:text-black"
    >
      Start for Free
    </a>
    <a
      className="rounded-full border border-gray-300 bg-white px-5 py-2 shadow-lg transition-all hover:border-gray-800"
      href="/enterprise"
    >
      <p className="text-sm">Get a Demo</p>
    </a>
  </div>
</div>
<form>
  <div className="relative flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="absolute inset-y-0 left-0 my-2 ml-3 w-5 text-gray-400"
    >
      <path d="M9 17H7A5 5 0 0 1 7 7h2" />
      <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
      <line x1={8} x2={16} y1={12} y2={12} />
    </svg>
    <input
      placeholder="https://www.mcxleague.com/awesome"
      autoComplete="off"
      required="false"
      className="peer block w-full rounded-md border border-gray-200 bg-white p-2 pl-10 pr-12 shadow-lg focus:border-black focus:outline-none focus:ring-0 sm:text-sm"
      type="url"
      name="url"
    />
    <button
      type="submit"
      className="hover:border-gray-700 hover:text-gray-700 peer-focus:text-gray-700 absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-10 items-center justify-center rounded border border-gray-200 font-sans text-sm font-medium text-gray-400"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <polyline points="9 10 4 15 9 20" />
        <path d="M20 4v7a4 4 0 0 1-4 4H4" />
      </svg>
    </button>
  </div>
</form>
    </>
  );
}
