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
      Unveiling Vercl.co
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
    Modern Short Links With
    <br />
    <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
      Superpowers
    </span>
  </h1>
  <h2 className="mt-5 text-gray-600 sm:text-xl">
    Vercl.co is a modern link managment infrastructure for every use case. 
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
<div className="mx-auto w-full max-w-md px-2.5 sm:px-0">
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
      placeholder="https://www.vercl.co/awesome"
      autoComplete="off"
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
  </div>
<div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 pb-10 pt-24">
<div className="border-y border-gray-200 bg-white/10 py-8 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur">
  <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 grid gap-y-4 divide-x divide-gray-200 md:grid-cols-3 md:gap-y-0">
    <div className="flex flex-col items-center justify-center space-y-2">
      <p className="text-4xl font-bold md:text-6xl">835+</p>
      <p className="font-semibold uppercase text-gray-500 md:text-lg">
        Active Companies
      </p>
    </div>
    <div className="flex flex-col items-center justify-center space-y-2">
      <p className="text-4xl font-bold md:text-6xl">100K</p>
      <p className="font-semibold uppercase text-gray-500 md:text-lg">
        Links Created
      </p>
    </div>
    <div className="flex flex-col items-center justify-center space-y-2">
      <p className="text-4xl font-bold md:text-6xl">1M</p>
      <p className="font-semibold uppercase text-gray-500 md:text-lg">
        Clicks Tracked
      </p>
    </div>
  </div>
</div>
  </div>
<div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 pb-10 pt-24">
      <div className="mx-auto max-w-md text-center sm:max-w-xl">
  <h2 className="font-display text-4xl font-extrabold leading-tight text-black sm:text-5xl sm:leading-tight">
    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
      Powerful 
    </span>
    features for 
    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
      effective
    </span>
    marketing teams
  </h2>
  <p className="mt-5 text-gray-600 sm:text-lg">
    Vercl.co is more than just a link shortener. We've built a suite of powerful
    features that gives you a marketing advantage.
  </p>
</div>
  <div className="grid grid-cols-1 gap-10 p-5 lg:grid-cols-3">
  <div data-orientation="vertical">
    <div data-state="open" data-orientation="vertical" className="border-b border-b-slate-200 py-3 last:border-none">
      <h3 data-orientation="vertical" data-state="open" className="flex"><button type="button" aria-controls="radix-:r5c:" aria-expanded="true" data-state="open" aria-disabled="true" data-orientation="vertical" id="radix-:r5b:" className="flex flex-1 items-center justify-between font-medium transition-all sm:text-lg [&amp;[data-state=open]>svg]:rotate-180" data-radix-collection-item="">
          <div className="flex items-center space-x-3 p-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 text-gray-500">
              <line x1="12" x2="12" y1="20" y2="10"></line>
              <line x1="18" x2="18" y1="20" y2="4"></line>
              <line x1="6" x2="6" y1="20" y2="16"></line>
            </svg>
            <h3 className="text-base font-semibold text-gray-600">Analytics that matter</h3>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 flex-none transition-transform duration-300">
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
      </h3>
      <div data-state="open" id="radix-:r5c:" role="region" aria-labelledby="radix-:r5b:" data-orientation="vertical" className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm text-gray-500 transition-all sm:text-base" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width); transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 154px; --radix-collapsible-content-width: 264px;">
        <div className="p-3">
          <p className="mb-4 text-sm text-gray-500">Dub provides powerful analytics for your links, including geolocation, device, browser, and referrer information.</p>
          <a className="block max-w-fit rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black" href="/features/analytics">Learn more</a>
        </div>
      </div>
    </div>
    <div data-state="closed" data-orientation="vertical" className="border-b border-b-slate-200 py-3 last:border-none">
      <h3 data-orientation="vertical" data-state="closed" className="flex"><button type="button" aria-controls="radix-:r5e:" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-:r5d:" className="flex flex-1 items-center justify-between font-medium transition-all sm:text-lg [&amp;[data-state=open]>svg]:rotate-180" data-radix-collection-item="">
          <div className="flex items-center space-x-3 p-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 text-gray-500">
              <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
              <polygon points="12 15 17 21 7 21 12 15"></polygon>
            </svg>
            <h3 className="text-base font-semibold text-gray-600">Use your own domain</h3>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 flex-none transition-transform duration-300">
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
      </h3>
      <div data-state="closed" id="radix-:r5e:" hidden="" role="region" aria-labelledby="radix-:r5d:" data-orientation="vertical" className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm text-gray-500 transition-all sm:text-base" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);"></div>
    </div>
    <div data-state="closed" data-orientation="vertical" className="border-b border-b-slate-200 py-3 last:border-none">
      <h3 data-orientation="vertical" data-state="closed" className="flex"><button type="button" aria-controls="radix-:r5g:" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-:r5f:" className="flex flex-1 items-center justify-between font-medium transition-all sm:text-lg [&amp;[data-state=open]>svg]:rotate-180" data-radix-collection-item="">
          <div className="flex items-center space-x-3 p-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 text-gray-500">
              <rect width="5" height="5" x="3" y="3" rx="1"></rect>
              <rect width="5" height="5" x="16" y="3" rx="1"></rect>
              <rect width="5" height="5" x="3" y="16" rx="1"></rect>
              <path d="M21 16h-3a2 2 0 0 0-2 2v3"></path>
              <path d="M21 21v.01"></path>
              <path d="M12 7v3a2 2 0 0 1-2 2H7"></path>
              <path d="M3 12h.01"></path>
              <path d="M12 3h.01"></path>
              <path d="M12 16v.01"></path>
              <path d="M16 12h1"></path>
              <path d="M21 12v.01"></path>
              <path d="M12 21v-1"></path>
            </svg>
            <h3 className="text-base font-semibold text-gray-600">Free QR Code Generator</h3>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 flex-none transition-transform duration-300">
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
      </h3>
      <div data-state="closed" id="radix-:r5g:" hidden="" role="region" aria-labelledby="radix-:r5f:" data-orientation="vertical" className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm text-gray-500 transition-all sm:text-base" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);"></div>undefined undefined
    </div>undefinedundefined<div data-state="closed" data-orientation="vertical" className="border-b border-b-slate-200 py-3 last:border-none">
      <h3 data-orientation="vertical" data-state="closed" className="flex"><button type="button" aria-controls="radix-:r5i:" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-:r5h:" className="flex flex-1 items-center justify-between font-medium transition-all sm:text-lg [&amp;[data-state=open]>svg]:rotate-180" data-radix-collection-item="">
          <div className="flex items-center space-x-3 p-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 text-gray-500">
              <path d="M9 17H7A5 5 0 0 1 7 7h2"></path>
              <path d="M15 7h2a5 5 0 1 1 0 10h-2"></path>
              <line x1="8" x2="16" y1="12" y2="12"></line>
            </svg>
            <h3 className="text-base font-semibold text-gray-600">Personalize Your Short links</h3>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 flex-none transition-transform duration-300">
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>undefinedundefined</h3>undefinedundefined<div data-state="closed" id="radix-:r5i:" hidden="" role="region" aria-labelledby="radix-:r5h:" data-orientation="vertical" className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm text-gray-500 transition-all sm:text-base" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);"></div>undefined undefined
    </div>undefinedundefined<div data-state="closed" data-orientation="vertical" className="border-b border-b-slate-200 py-3 last:border-none">undefinedundefined<h3 data-orientation="vertical" data-state="closed" className="flex"><button type="button" aria-controls="radix-:r5k:" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-:r5j:" className="flex flex-1 items-center justify-between font-medium transition-all sm:text-lg [&amp;[data-state=open]>svg]:rotate-180" data-radix-collection-item="">
          <div className="flex items-center space-x-3 p-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 text-gray-500">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <h3 className="text-base font-semibold text-gray-600">Collaborate With Your Team</h3>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 flex-none transition-transform duration-300">
            <path d="m6 9 6 6 6-6"></path>
          </svg>undefined undefined
        </button>undefinedundefined</h3>undefinedundefined<div data-state="closed" id="radix-:r5k:" hidden="" role="region" aria-labelledby="radix-:r5j:" data-orientation="vertical" className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm text-gray-500 transition-all sm:text-base" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);"></div>undefinedundefined</div>undefined undefined
  </div>undefinedundefined<div className="lg:col-span-2">undefinedundefined<div className="relative -mb-6 aspect-[1735/990] w-full overflow-hidden rounded-t-2xl shadow-2xl lg:mt-10 lg:h-[500px] lg:w-[800px]" style="opacity: 1; transform: none;">undefinedundefined<button className="group absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-black bg-opacity-0 transition-all duration-300 hover:bg-opacity-5 focus:outline-none">undefinedundefined<div className="flex flex-col items-center space-y-4">
          <div className="rounded-full bg-gradient-to-tr from-black to-gray-700 p-5 ring-[6px] ring-gray-300 transition-all duration-300 group-hover:scale-110 group-hover:ring-4 group-active:scale-90">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 text-white">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
          <div className="flex rounded-full border border-gray-200 bg-white p-2 shadow-xl group-hover:shadow-2xl">
            <img alt="Steven Tey" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" className="h-10 w-10 rounded-full blur-0" style="color: transparent;" srcset="/_next/image?url=https%3A%2F%2Fd2vwwcvoksz7ty.cloudfront.net%2Fauthor%2Fsteventey.jpg&amp;w=48&amp;q=75&amp;dpl=dpl_AVZhgNCcSja2E9sUibdYcydpCsfB 1x, /_next/image?url=https%3A%2F%2Fd2vwwcvoksz7ty.cloudfront.net%2Fauthor%2Fsteventey.jpg&amp;w=96&amp;q=75&amp;dpl=dpl_AVZhgNCcSja2E9sUibdYcydpCsfB 2x" src="https://dub.co/_next/image?url=https%3A%2F%2Fd2vwwcvoksz7ty.cloudfront.net%2Fauthor%2Fsteventey.jpg&amp;w=96&amp;q=75&amp;dpl=dpl_AVZhgNCcSja2E9sUibdYcydpCsfB">
            <div className="ml-2 mr-4 flex flex-col text-left">
              <p className="text-sm font-medium text-gray-500">Watch Demo</p>
              <p className="text-sm text-blue-500">2:56</p>
            </div>
          </div>
        </div>undefinedundefined</button>undefinedundefined<img alt="Powerful analytics for the modern marketer" loading="lazy" width="1735" height="990" decoding="async" data-nimg="1" className="absolute h-full object-cover blur-0" style="color: transparent;" srcset="/_next/image?url=https%3A%2F%2Fd2vwwcvoksz7ty.cloudfront.net%2Ffeatures%2Fanalytics.png&amp;w=1920&amp;q=75&amp;dpl=dpl_AVZhgNCcSja2E9sUibdYcydpCsfB 1x, /_next/image?url=https%3A%2F%2Fd2vwwcvoksz7ty.cloudfront.net%2Ffeatures%2Fanalytics.png&amp;w=3840&amp;q=75&amp;dpl=dpl_AVZhgNCcSja2E9sUibdYcydpCsfB 2x" src="https://dub.co/_next/image?url=https%3A%2F%2Fd2vwwcvoksz7ty.cloudfront.net%2Ffeatures%2Fanalytics.png&amp;w=3840&amp;q=75&amp;dpl=dpl_AVZhgNCcSja2E9sUibdYcydpCsfB">undefinedundefined</div>undefinedundefined</div>undefined undefined
</div>
  </div>
    </>
  );
}
