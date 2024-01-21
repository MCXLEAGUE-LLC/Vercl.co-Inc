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


<div id="features">
  <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 pb-10 pt-24">
    <div className="mx-auto max-w-md text-center sm:max-w-xl">
      <h2 className="font-display text-4xl font-extrabold leading-tight text-black sm:text-5xl sm:leading-tight">
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Powerful
        </span>
        {' '}features for{' '}
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          modern
        </span>
        {' '}marketing teams
      </h2>
      <p className="mt-5 text-gray-600 sm:text-lg">
        Dub.co is more than just a link shortener. We've built a suite of powerful features that gives you marketing superpowers.
      </p>
    </div>
    <div className="my-10 w-full overflow-hidden rounded-xl border border-gray-200 bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur lg:h-[540px]">
      <div className="grid grid-cols-1 gap-10 p-5 lg:grid-cols-3">
        <div data-orientation="vertical">
          <div
            className="border-b border-b-slate-200 py-3 last:border-none"
            data-orientation="vertical"
            data-state="open"
          >
            <h3
              className="flex"
              data-orientation="vertical"
              data-state="open"
            >
              <button
                aria-controls="radix-:R4mdf75a:"
                aria-disabled="true"
                aria-expanded="true"
                className="flex flex-1 items-center justify-between font-medium transition-all sm:text-lg [&[data-state=open]>svg]:rotate-180"
                data-orientation="vertical"
                data-radix-collection-item=""
                data-state="open"
                id="radix-:Rmdf75a:"
                type="button"
              >
                <div className="flex items-center space-x-3 p-3">
                  <svg
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="12"
                      x2="12"
                      y1="20"
                      y2="10"
                    />
                    <line
                      x1="18"
                      x2="18"
                      y1="20"
                      y2="4"
                    />
                    <line
                      x1="6"
                      x2="6"
                      y1="20"
                      y2="16"
                    />
                  </svg>
                  <h3 className="text-base font-semibold text-gray-600">
                    Analytics that matter
                  </h3>
                </div>
                <svg
                  className="h-5 w-5 flex-none transition-transform duration-300"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </h3>
            <div
              aria-labelledby="radix-:Rmdf75a:"
              className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm text-gray-500 transition-all sm:text-base"
              data-orientation="vertical"
              data-state="open"
              id="radix-:R4mdf75a:"
              role="region"
              style={{
                '--radix-accordion-content-height': 'var(--radix-collapsible-content-height)',
                '--radix-accordion-content-width': 'var(--radix-collapsible-content-width)',
                '--radix-collapsible-content-height': '154px',
                '--radix-collapsible-content-width': '264px',
                animationName: 'none',
                transitionDuration: '0s'
              }}
            >
              <div className="p-3">
                <p className="mb-4 text-sm text-gray-500">
                  Dub provides powerful analytics for your links, including geolocation, device, browser, and referrer information.
                </p>
                <a
                  className="block max-w-fit rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
                  href="/features/analytics"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div
            className="border-b border-b-slate-200 py-3 last:border-none"
            data-orientation="vertical"
            data-state="closed"
          >
            <h3
              className="flex"
              data-orientation="vertical"
              data-state="closed"
            >
              <button
                aria-controls="radix-:R56df75a:"
                aria-expanded="false"
                className="flex flex-1 items-center justify-between font-medium transition-all sm:text-lg [&[data-state=open]>svg]:rotate-180"
                data-orientation="vertical"
                data-radix-collection-item=""
                data-state="closed"
                id="radix-:R16df75a:"
                type="button"
              >
                <div className="flex items-center space-x-3 p-3">
                  <svg
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
                    <polygon points="12 15 17 21 7 21 12 15" />
                  </svg>
                  <h3 className="text-base font-semibold text-gray-600">
                    Use your own domain
                  </h3>
                </div>
                <svg
                  className="h-5 w-5 flex-none transition-transform duration-300"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </h3>
            <div
              aria-labelledby="radix-:R16df75a:"
              className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm text-gray-500 transition-all sm:text-base"
              data-orientation="vertical"
              data-state="closed"
              hidden
              id="radix-:R56df75a:"
              role="region"
              style={{
                '--radix-accordion-content-height': 'var(--radix-collapsible-content-height)',
                '--radix-accordion-content-width': 'var(--radix-collapsible-content-width)'
              }}
            />
          </div>
          <div
            className="border-b border-b-slate-200 py-3 last:border-none"
            data-orientation="vertical"
            data-state="closed"
          >
            <h3
              className="flex"
              data-orientation="vertical"
              data-state="closed"
            >
              <button
                aria-controls="radix-:R5mdf75a:"
                aria-expanded="false"
                className="flex flex-1 items-center justify-between font-medium transition-all sm:text-lg [&[data-state=open]>svg]:rotate-180"
                data-orientation="vertical"
                data-radix-collection-item=""
                data-state="closed"
                id="radix-:R1mdf75a:"
                type="button"
              >
                <div className="flex items-center space-x-3 p-3">
                  <svg
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="5"
                      rx="1"
                      width="5"
                      x="3"
                      y="3"
                    />
                    <rect
                      height="5"
                      rx="1"
                      width="5"
                      x="16"
                      y="3"
                    />
                    <rect
                      height="5"
                      rx="1"
                      width="5"
                      x="3"
                      y="16"
                    />
                    <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
                    <path d="M21 21v.01" />
                    <path d="M12 7v3a2 2 0 0 1-2 2H7" />
                    <path d="M3 12h.01" />
                    <path d="M12 3h.01" />
                    <path d="M12 16v.01" />
                    <path d="M16 12h1" />
                    <path d="M21 12v.01" />
                    <path d="M12 21v-1" />
                  </svg>
                  <h3 className="text-base font-semibold text-gray-600">
                    Free QR Code Generator
                  </h3>
                </div>
                <svg
                  className="h-5 w-5 flex-none transition-transform duration-300"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </h3>
            <div
              aria-labelledby="radix-:R1mdf75a:"
              className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm text-gray-500 transition-all sm:text-base"
              data-orientation="vertical"
              data-state="closed"
              hidden
              id="radix-:R5mdf75a:"
              role="region"
              style={{
                '--radix-accordion-content-height': 'var(--radix-collapsible-content-height)',
                '--radix-accordion-content-width': 'var(--radix-collapsible-content-width)'
              }}
            />
          </div>
          <div
            className="border-b border-b-slate-200 py-3 last:border-none"
            data-orientation="vertical"
            data-state="closed"
          >
            <h3
              className="flex"
              data-orientation="vertical"
              data-state="closed"
            >
              <button
                aria-controls="radix-:R66df75a:"
                aria-expanded="false"
                className="flex flex-1 items-center justify-between font-medium transition-all sm:text-lg [&[data-state=open]>svg]:rotate-180"
                data-orientation="vertical"
                data-radix-collection-item=""
                data-state="closed"
                id="radix-:R26df75a:"
                type="button"
              >
                <div className="flex items-center space-x-3 p-3">
                  <svg
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 17H7A5 5 0 0 1 7 7h2" />
                    <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
                    <line
                      x1="8"
                      x2="16"
                      y1="12"
                      y2="12"
                    />
                  </svg>
                  <h3 className="text-base font-semibold text-gray-600">
                    Personalize Your Short links
                  </h3>
                </div>
                <svg
                  className="h-5 w-5 flex-none transition-transform duration-300"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </h3>
            <div
              aria-labelledby="radix-:R26df75a:"
              className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm text-gray-500 transition-all sm:text-base"
              data-orientation="vertical"
              data-state="closed"
              hidden
              id="radix-:R66df75a:"
              role="region"
              style={{
                '--radix-accordion-content-height': 'var(--radix-collapsible-content-height)',
                '--radix-accordion-content-width': 'var(--radix-collapsible-content-width)'
              }}
            />
          </div>
          <div
            className="border-b border-b-slate-200 py-3 last:border-none"
            data-orientation="vertical"
            data-state="closed"
          >
            <h3
              className="flex"
              data-orientation="vertical"
              data-state="closed"
            >
              <button
                aria-controls="radix-:R6mdf75a:"
                aria-expanded="false"
                className="flex flex-1 items-center justify-between font-medium transition-all sm:text-lg [&[data-state=open]>svg]:rotate-180"
                data-orientation="vertical"
                data-radix-collection-item=""
                data-state="closed"
                id="radix-:R2mdf75a:"
                type="button"
              >
                <div className="flex items-center space-x-3 p-3">
                  <svg
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle
                      cx="9"
                      cy="7"
                      r="4"
                    />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <h3 className="text-base font-semibold text-gray-600">
                    Collaborate With Your Team
                  </h3>
                </div>
                <svg
                  className="h-5 w-5 flex-none transition-transform duration-300"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </h3>
            <div
              aria-labelledby="radix-:R2mdf75a:"
              className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm text-gray-500 transition-all sm:text-base"
              data-orientation="vertical"
              data-state="closed"
              hidden
              id="radix-:R6mdf75a:"
              role="region"
              style={{
                '--radix-accordion-content-height': 'var(--radix-collapsible-content-height)',
                '--radix-accordion-content-width': 'var(--radix-collapsible-content-width)'
              }}
            />
          </div>
        </div>
        <div className="lg:col-span-2">
          <div
            className="relative -mb-6 aspect-[1735/990] w-full overflow-hidden rounded-t-2xl shadow-2xl lg:mt-10 lg:h-[500px] lg:w-[800px]"
            style={{
              opacity: '1',
              transform: 'none'
            }}
          >
            <button className="group absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-black bg-opacity-0 transition-all duration-300 hover:bg-opacity-5 focus:outline-none">
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-full bg-gradient-to-tr from-black to-gray-700 p-5 ring-[6px] ring-gray-300 transition-all duration-300 group-hover:scale-110 group-hover:ring-4 group-active:scale-90">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="currentColor"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <div className="flex rounded-full border border-gray-200 bg-white p-2 shadow-xl group-hover:shadow-2xl">
                  <img
                    alt="Steven Tey"
                    className="h-10 w-10 rounded-full blur-0"
                    data-nimg="1"
                    decoding="async"
                    height="36"
                    loading="lazy"
                    src="https://dub.co/_next/image?url=https%3A%2F%2Fd2vwwcvoksz7ty.cloudfront.net%2Fauthor%2Fsteventey.jpg&w=96&q=75&dpl=dpl_AVZhgNCcSja2E9sUibdYcydpCsfB"
                    srcSet="/_next/image?url=https%3A%2F%2Fd2vwwcvoksz7ty.cloudfront.net%2Fauthor%2Fsteventey.jpg&w=48&q=75&dpl=dpl_AVZhgNCcSja2E9sUibdYcydpCsfB 1x, /_next/image?url=https%3A%2F%2Fd2vwwcvoksz7ty.cloudfront.net%2Fauthor%2Fsteventey.jpg&w=96&q=75&dpl=dpl_AVZhgNCcSja2E9sUibdYcydpCsfB 2x"
                    style={{
                      color: 'transparent'
                    }}
                    width="36"
                  />
                  <div className="ml-2 mr-4 flex flex-col text-left">
                    <p className="text-sm font-medium text-gray-500">
                      Watch Demo
                    </p>
                    <p className="text-sm text-blue-500">
                      2:56
                    </p>
                  </div>
                </div>
              </div>
            </button>
            <img
              alt="Powerful analytics for the modern marketer"
              className="absolute h-full object-cover blur-0"
              data-nimg="1"
              decoding="async"
              height="990"
              loading="lazy"
              src="https://dub.co/_next/image?url=https%3A%2F%2Fd2vwwcvoksz7ty.cloudfront.net%2Ffeatures%2Fanalytics.png&w=3840&q=75&dpl=dpl_AVZhgNCcSja2E9sUibdYcydpCsfB"
              srcSet="/_next/image?url=https%3A%2F%2Fd2vwwcvoksz7ty.cloudfront.net%2Ffeatures%2Fanalytics.png&w=1920&q=75&dpl=dpl_AVZhgNCcSja2E9sUibdYcydpCsfB 1x, /_next/image?url=https%3A%2F%2Fd2vwwcvoksz7ty.cloudfront.net%2Ffeatures%2Fanalytics.png&w=3840&q=75&dpl=dpl_AVZhgNCcSja2E9sUibdYcydpCsfB 2x"
              style={{
                color: 'transparent'
              }}
              width="1735"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 space-y-5 pt-20 md:space-y-10">
  <div className="mx-auto max-w-md text-center sm:max-w-xl">
    <h2 className="font-display text-4xl font-extrabold leading-tight text-black sm:text-5xl sm:leading-tight">
      We ship{/* */}{" "}
      <span className="bg-gradient-to-br from-green-600 to-green-300 bg-clip-text pr-2 italic text-transparent">
        fast
      </span>
    </h2>
    <p className="mt-5 text-gray-600 sm:text-lg">
      Check out our changelog to see what's new on Dub.co
    </p>
  </div>
  <ul className="mx-5 max-w-2xl md:mx-auto md:translate-x-16">
    <li>
      <a
        className="group hidden grid-cols-9 items-center md:grid"
        href="/blog/new-pricing"
      >
        <dl className="col-span-2">
          <dt className="sr-only">Published on</dt>
          <dd className="text-base font-medium text-gray-400 transition-colors group-hover:text-gray-700">
            <time dateTime="2024-01-19">January 19, 2024</time>
          </dd>
        </dl>
        <div className="col-span-7 flex items-center">
          <div className="relative ml-4">
            <div className="h-16 border-l border-gray-400 pr-8" />
            <div className="absolute -left-1 top-[1.6875rem] h-2.5 w-2.5 rounded-full bg-gray-400 transition-colors group-hover:bg-gray-700" />
          </div>
          <h3 className="text-2xl font-medium tracking-tight text-gray-700 transition-colors group-hover:text-black">
            Pricing Updates (Jan '24)
          </h3>
        </div>
      </a>
      <a
        className="flex items-center space-x-4 rounded-lg active:bg-gray-100 md:hidden"
        href="/blog/new-pricing"
      >
        <div className="relative">
          <div className="h-16 border-l border-gray-400" />
          <div className="absolute -left-1 top-5 h-2.5 w-2.5 rounded-full bg-gray-400" />
        </div>
        <div>
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-sm font-medium text-gray-400">
              <time dateTime="2024-01-19">January 19, 2024</time>
            </dd>
          </dl>
          <h3 className="text-lg font-medium tracking-tight text-gray-700">
            Pricing Updates (Jan '24)
          </h3>
        </div>
      </a>
    </li>
    <li>
      <a
        className="group hidden grid-cols-9 items-center md:grid"
        href="/blog/company"
      >
        <dl className="col-span-2">
          <dt className="sr-only">Published on</dt>
          <dd className="text-base font-medium text-gray-400 transition-colors group-hover:text-gray-700">
            <time dateTime="2024-01-17">January 17, 2024</time>
          </dd>
        </dl>
        <div className="col-span-7 flex items-center">
          <div className="relative ml-4">
            <div className="h-16 border-l border-gray-400 pr-8" />
            <div className="absolute -left-1 top-[1.6875rem] h-2.5 w-2.5 rounded-full bg-gray-400 transition-colors group-hover:bg-gray-700" />
          </div>
          <h3 className="text-2xl font-medium tracking-tight text-gray-700 transition-colors group-hover:text-black">
            Unveiling Dub.co's New Chapter
          </h3>
        </div>
      </a>
      <a
        className="flex items-center space-x-4 rounded-lg active:bg-gray-100 md:hidden"
        href="/blog/company"
      >
        <div className="relative">
          <div className="h-16 border-l border-gray-400" />
          <div className="absolute -left-1 top-5 h-2.5 w-2.5 rounded-full bg-gray-400" />
        </div>
        <div>
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-sm font-medium text-gray-400">
              <time dateTime="2024-01-17">January 17, 2024</time>
            </dd>
          </dl>
          <h3 className="text-lg font-medium tracking-tight text-gray-700">
            Unveiling Dub.co's New Chapter
          </h3>
        </div>
      </a>
    </li>
    <li>
      <a
        className="group hidden grid-cols-9 items-center md:grid"
        href="/changelog/dub-links-updates"
      >
        <dl className="col-span-2">
          <dt className="sr-only">Published on</dt>
          <dd className="text-base font-medium text-gray-400 transition-colors group-hover:text-gray-700">
            <time dateTime="2024-01-17">January 17, 2024</time>
          </dd>
        </dl>
        <div className="col-span-7 flex items-center">
          <div className="relative ml-4">
            <div className="h-16 border-l border-gray-400 pr-8" />
            <div className="absolute -left-1 top-[1.6875rem] h-2.5 w-2.5 rounded-full bg-gray-400 transition-colors group-hover:bg-gray-700" />
          </div>
          <h3 className="text-2xl font-medium tracking-tight text-gray-700 transition-colors group-hover:text-black">
            Updates to dub.sh Links
          </h3>
        </div>
      </a>
      <a
        className="flex items-center space-x-4 rounded-lg active:bg-gray-100 md:hidden"
        href="/changelog/dub-links-updates"
      >
        <div className="relative">
          <div className="h-16 border-l border-gray-400" />
          <div className="absolute -left-1 top-5 h-2.5 w-2.5 rounded-full bg-gray-400" />
        </div>
        <div>
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-sm font-medium text-gray-400">
              <time dateTime="2024-01-17">January 17, 2024</time>
            </dd>
          </dl>
          <h3 className="text-lg font-medium tracking-tight text-gray-700">
            Updates to dub.sh Links
          </h3>
        </div>
      </a>
    </li>
    <li>
      <a
        className="group hidden grid-cols-9 items-center md:grid"
        href="/changelog/rebrandly-migration-assistant"
      >
        <dl className="col-span-2">
          <dt className="sr-only">Published on</dt>
          <dd className="text-base font-medium text-gray-400 transition-colors group-hover:text-gray-700">
            <time dateTime="2023-12-18">December 18, 2023</time>
          </dd>
        </dl>
        <div className="col-span-7 flex items-center">
          <div className="relative ml-4">
            <div className="h-16 border-l border-gray-400 pr-8" />
            <div className="absolute -left-1 top-[1.6875rem] h-2.5 w-2.5 rounded-full bg-gray-400 transition-colors group-hover:bg-gray-700" />
          </div>
          <h3 className="text-2xl font-medium tracking-tight text-gray-700 transition-colors group-hover:text-black">
            Rebrandly Migration Assistant
          </h3>
        </div>
      </a>
      <a
        className="flex items-center space-x-4 rounded-lg active:bg-gray-100 md:hidden"
        href="/changelog/rebrandly-migration-assistant"
      >
        <div className="relative">
          <div className="h-16 border-l border-gray-400" />
          <div className="absolute -left-1 top-5 h-2.5 w-2.5 rounded-full bg-gray-400" />
        </div>
        <div>
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-sm font-medium text-gray-400">
              <time dateTime="2023-12-18">December 18, 2023</time>
            </dd>
          </dl>
          <h3 className="text-lg font-medium tracking-tight text-gray-700">
            Rebrandly Migration Assistant
          </h3>
        </div>
      </a>
    </li>
    <li>
      <a
        className="group hidden grid-cols-9 items-center md:grid"
        href="/blog/introducing-new-analytics"
      >
        <dl className="col-span-2">
          <dt className="sr-only">Published on</dt>
          <dd className="text-base font-medium text-gray-400 transition-colors group-hover:text-gray-700">
            <time dateTime="2023-11-04">November 4, 2023</time>
          </dd>
        </dl>
        <div className="col-span-7 flex items-center">
          <div className="relative ml-4">
            <div className="h-16 border-l border-gray-400 pr-8" />
            <div className="absolute -left-1 top-[1.6875rem] h-2.5 w-2.5 rounded-full bg-gray-400 transition-colors group-hover:bg-gray-700" />
          </div>
          <h3 className="text-2xl font-medium tracking-tight text-gray-700 transition-colors group-hover:text-black">
            Introducing New &amp; Improved Analytics for Dub
          </h3>
        </div>
      </a>
      <a
        className="flex items-center space-x-4 rounded-lg active:bg-gray-100 md:hidden"
        href="/blog/introducing-new-analytics"
      >
        <div className="relative">
          <div className="h-16 border-l border-gray-400" />
          <div className="absolute -left-1 top-5 h-2.5 w-2.5 rounded-full bg-gray-400" />
        </div>
        <div>
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-sm font-medium text-gray-400">
              <time dateTime="2023-11-04">November 4, 2023</time>
            </dd>
          </dl>
          <h3 className="text-lg font-medium tracking-tight text-gray-700">
            Introducing New &amp; Improved Analytics for Dub
          </h3>
        </div>
      </a>
    </li>
    <li>
      <a
        className="group hidden grid-cols-9 items-center md:grid"
        href="/changelog/bot-clicks-not-counted"
      >
        <dl className="col-span-2">
          <dt className="sr-only">Published on</dt>
          <dd className="text-base font-medium text-gray-400 transition-colors group-hover:text-gray-700">
            <time dateTime="2023-10-29">October 29, 2023</time>
          </dd>
        </dl>
        <div className="col-span-7 flex items-center">
          <div className="relative ml-4">
            <div className="h-16 border-l border-gray-400 pr-8" />
            <div className="absolute -left-1 top-[1.6875rem] h-2.5 w-2.5 rounded-full bg-gray-400 transition-colors group-hover:bg-gray-700" />
          </div>
          <h3 className="text-2xl font-medium tracking-tight text-gray-700 transition-colors group-hover:text-black">
            Bot clicks are no longer counted
          </h3>
        </div>
      </a>
      <a
        className="flex items-center space-x-4 rounded-lg active:bg-gray-100 md:hidden"
        href="/changelog/bot-clicks-not-counted"
      >
        <div className="relative">
          <div className="h-16 border-l border-gray-400" />
          <div className="absolute -left-1 top-5 h-2.5 w-2.5 rounded-full bg-gray-400" />
        </div>
        <div>
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-sm font-medium text-gray-400">
              <time dateTime="2023-10-29">October 29, 2023</time>
            </dd>
          </dl>
          <h3 className="text-lg font-medium tracking-tight text-gray-700">
            Bot clicks are no longer counted
          </h3>
        </div>
      </a>
    </li>
  </ul>
  <a
    className="mx-auto block max-w-fit rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white hover:bg-white hover:text-black"
    href="/changelog"
  >
    Full changelog
  </a>
</div>
<div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 flex flex-col items-center justify-center space-y-5 pt-20 text-center">
  <svg
    width={191}
    height={191}
    viewBox="0 0 191 191"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-black"
  >
    <g clipPath="url(#clip0_1301_107)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M122 -14H144 9.17859 129.788 5.96937 122 3.72462V-14ZM122 3.72462C113.586 1.29941 104.695 0 95.5 0C42.7568 0 0 42.7568 0 95.5C0 148.243 42.7568 191 95.5 191C148.243 191 191 148.243 191 95.5C191 60.462 172.131 29.8311 144 13.2146V100V148H122V140.897C114.258 146.018 104.977 149 95 149C67.938 149 46 127.062 46 100C46 72.938 67.938 51 95 51C104.977 51 114.258 53.982 122 59.1034V3.72462Z"
        fill="currentColor"
        shapeRendering="geometricPrecision"
      />
    </g>
    <defs>
      <clipPath id="clip0_1301_107">
        <rect width={191} height={191} rx="95.5" fill="white" />
      </clipPath>
    </defs>
  </svg>
  <h2 className="font-display text-4xl font-extrabold leading-tight text-black sm:text-5xl sm:leading-tight">
    <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
      Boost
    </span>
    <br />
    your marketing efforts
  </h2>
  <p className="text-center text-gray-600 sm:max-w-lg sm:text-xl">
    See why Vercl.co is the link management infrastructure of choice for modern
    marketing teams
  </p>
</div>
<div class="mx-auto w-medium max-w-screen-xl px-2.5 lg:px-10 pb-10 pt-5">
</div>
    </>
  );
}
