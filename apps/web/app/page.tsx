import { InlineSnippet } from "@dub/ui";
import { STAGGER_CHILD_VARIANTS } from "@dub/utils";
import Spline from "@splinetool/react-spline";
import va from "@vercel/analytics";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import { Background } from "@dub/ui";

export const metadata = constructMetadata({
  title: "Pricing - Dub",
});


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
      href="https://app.vercl.co"
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

<div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 mb-8 mt-16">
  <div className="mx-auto mb-6 text-center sm:max-w-lg">
    <h1 className="font-display text-4xl font-extrabold text-black [text-wrap:balance] sm:text-5xl sm:leading-tight">
      <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
        Straightforward,
      </span>
      {' '}affordable pricing
    </h1>
    <p className="mt-5 text-gray-600 sm:text-lg">
      Find a plan that fits your needs.{' '}
      <br />
      {' '}Start for free, no credit card required.
    </p>
  </div>
  <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-4">
    <div className="relative rounded-2xl bg-white border border-gray-200 shadow-lg">
      <div className="p-8">
        <div className="flex items-center space-x-2">
          <div className="h-5 w-5 rounded-full bg-black" />
          <h3 className="font-display text-2xl font-bold text-black">
            Free
          </h3>
        </div>
        <p className="mt-2 text-gray-500">
          For hobby & side projects
        </p>
        <div className="my-4 flex items-end space-x-2">
          <p className="font-display text-5xl font-semibold">
            $0
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-500">
            Free forever
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center border-b border-t border-gray-200 bg-gray-50 px-8 py-5">
        <a
          className="block w-full rounded-full border py-2 text-center font-medium text-white transition-all duration-200 ease-in-out hover:bg-transparent bg-black border-black hover:text-black"
          href="https://app.vercl.co/register"
        >
          Start for free
        </a>
      </div>
      <h4 className="mt-7 px-8 font-medium text-gray-600">
        What's included:
      </h4>
      <ul className="mb-10 mt-5 space-y-5 px-8">
        <li className="flex space-x-4">
          <svg
            className="h-6 w-6 flex-none text-black"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            25 links/mo
          </p>
        </li>
        <li className="flex space-x-4">
          <svg
            className="h-6 w-6 flex-none text-black"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            1K tracked clicks/mo
          </p>
        </li>
        <li className="flex space-x-4">
          <svg
            className="h-6 w-6 flex-none text-black"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            30-day analytics retention
          </p>
        </li>
        <li className="flex space-x-4">
          <svg
            className="h-6 w-6 flex-none text-black"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            3 custom domains
          </p>
        </li>
        <li className="flex space-x-4">
          <svg
            className="h-6 w-6 flex-none text-black"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            1 user
          </p>
        </li>
        <li className="flex space-x-4">
          <svg
            className="h-6 w-6 flex-none text-black"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p
            className="cursor-help text-gray-600 underline decoration-dotted underline-offset-2"
            data-state="closed"
          >
            Community support
          </p>
        </li>
        <li className="flex space-x-4">
          <svg
            className="h-6 w-6 flex-none text-black"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p
            className="cursor-help text-gray-600 underline decoration-dotted underline-offset-2"
            data-state="closed"
          >
            API Access
          </p>
        </li>
      </ul>
    </div>
    <div className="relative rounded-2xl bg-white border-2 border-blue-600 shadow-blue-200 shadow-lg">
      <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-2 text-center text-sm font-medium text-white">
        Popular
      </div>
      <div className="p-8">
        <div className="flex items-center space-x-2">
          <div className="h-5 w-5 rounded-full bg-blue-500" />
          <h3 className="font-display text-2xl font-bold text-black">
            Pro
          </h3>
        </div>
        <p className="mt-2 text-gray-500">
          For startups & small businesses
        </p>
        <div className="my-4 flex items-end space-x-2">
          <p className="font-display text-5xl font-semibold">
            $19
          </p>
          <p className="text-gray-500">
            / month
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-500">
            Billed yearly
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center border-b border-t border-gray-200 bg-gray-50 px-8 py-5">
        <a
          className="block w-full rounded-full border py-2 text-center font-medium text-white transition-all duration-200 ease-in-out hover:bg-transparent bg-blue-500 border-blue-500 hover:text-blue-500"
          href="https://app.vercl.co/register"
        >
          Get started with Pro
        </a>
      </div>
      <h4 className="mt-7 px-8 font-medium text-gray-600">
        Everything in Free, plus:
      </h4>
      <ul className="mb-10 mt-5 space-y-5 px-8">
        <li className="flex space-x-4">
          <svg
            className="h-6 w-6 flex-none text-blue-500"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            1,000 links/mo
          </p>
        </li>
        <li className="flex space-x-4">
          <svg
            className="h-6 w-6 flex-none text-blue-500"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            50K tracked clicks/mo
          </p>
        </li>
        <li className="flex space-x-4">
          <svg
            className="h-6 w-6 flex-none text-blue-500"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            1-year analytics retention
          </p>
        </li>
        <li className="flex space-x-4">
          <svg
            className="h-6 w-6 flex-none text-blue-500"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            10 custom domains
          </p>
        </li>
        <li className="flex space-x-4">
          <svg
            className="h-6 w-6 flex-none text-blue-500"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            5 users
          </p>
        </li>
        <li className="flex space-x-4">
          <svg
            className="h-6 w-6 flex-none text-blue-500"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p
            className="cursor-help text-gray-600 underline decoration-dotted underline-offset-2"
            data-state="closed"
          >
            Basic support
          </p>
        </li>
        <li className="flex space-x-4">
          <svg
            className="h-6 w-6 flex-none text-blue-500"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p
            className="cursor-help text-gray-600 underline decoration-dotted underline-offset-2"
            data-state="closed"
          >
            Root domain redirect
          </p>
        </li>
        <li className="flex space-x-4">
          <svg
            className="h-6 w-6 flex-none text-blue-500"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p
            className="cursor-help text-gray-600 underline decoration-dotted underline-offset-2"
            data-state="closed"
          >
            Advanced link features
          </p>
        </li>
      </ul>
    </div>
    <div className="relative rounded-2xl bg-white border border-gray-200 shadow-lg">
      <div className="p-8">
        <div className="flex items-center space-x-2">
          <div className="h-5 w-5 rounded-full bg-sky-900" />
          <h3 className="font-display text-2xl font-bold text-black">
            Business
          </h3>
        </div>
        <p className="mt-2 text-gray-500">
          For larger teams with increased usage
        </p>
        <div className="my-4 flex items-end space-x-2">
          <p className="font-display text-5xl font-semibold">
            $39
          </p>
          <p className="text-gray-500">
            / month
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-500">
            Billed yearly
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center border-b border-t border-gray-200 bg-gray-50 px-8 py-5">
        <a
          className="block w-full rounded-full border py-2 text-center font-medium text-white transition-all duration-200 ease-in-out hover:bg-transparent bg-sky-900 border-sky-900 hover:text-sky-900"
          href="https://app.vercl.co/register"
        >
          Get started with Business
        </a>
      </div>
      <h4 className="mt-7 px-8 font-medium text-gray-600">
        Everything in Pro, plus:
      </h4>
      <ul className="mb-10 mt-5 space-y-5 px-8">
        <li className="flex space-x-4">
          <svg
            className="h-6 w-6 flex-none text-sky-900"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            5,000 links/mo
          </p>
        </li>
        <li className="flex space-x-4">
          <svg
            className="h-6 w-6 flex-none text-sky-900"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            250K tracked clicks/mo
          </p>
        </li>
        <li className="flex space-x-4">
          <svg
            className="h-6 w-6 flex-none text-sky-900"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            2-year analytics retention
          </p>
        </li>
        <li className="flex space-x-4">
          <svg
            className="h-6 w-6 flex-none text-sky-900"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            20 custom domains
          </p>
        </li>
        <li className="flex space-x-4">
          <svg
            className="h-6 w-6 flex-none text-sky-900"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            15 users
          </p>
        </li>
        <li className="flex space-x-4">
          <svg
            className="h-6 w-6 flex-none text-sky-900"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p
            className="cursor-help text-gray-600 underline decoration-dotted underline-offset-2"
            data-state="closed"
          >
            Elevated support
          </p>
        </li>
        <li className="flex space-x-4">
          <svg
            className="h-6 w-6 flex-none text-sky-900"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p
            className="cursor-help text-gray-600 underline decoration-dotted underline-offset-2"
            data-state="closed"
          >
            Custom branding
          </p>
        </li>
        <li className="flex space-x-4">
          <svg
            className="h-6 w-6 flex-none text-sky-900"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p
            className="cursor-help text-gray-600 underline decoration-dotted underline-offset-2"
            data-state="closed"
          >
            Event callbacks (Beta)
          </p>
        </li>
      </ul>
    </div>
  </div>
  <div className="mx-auto mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg sm:w-4/5">
    <div className="flex flex-col justify-between space-y-4 p-8 pb-0 sm:flex-row sm:items-center sm:space-y-0 sm:p-16 sm:pb-0">
      <div>
        <h3 className="font-display text-2xl font-bold sm:text-3xl">
          Vercl.co{' '}
          <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
            Enterprise
          </span>
        </h3>
        <p className="mt-4 max-w-lg text-gray-500 [text-wrap:balance]">
          Custom tailored plans for large enterprises. Whether you're running a SMS campaign with{' '}
          <i>
            millions
          </i>
          {' '}of short links or a large marketing campaign with{' '}
          <i>
            billions
          </i>
          {' '}of clicks, we've got you covered.
        </p>
      </div>
      <a
        className="group rounded-full border bg-gradient-to-r from-violet-600 to-pink-600 px-8 py-2 text-center font-medium text-white transition-all duration-200 ease-in-out hover:scale-105 active:scale-95"
        href="/enterprise"
      >
        Contact Sales
      </a>
    </div>
    <div className="relative mx-8 mt-4 overflow-hidden sm:mx-16">
      <div className="pointer-events-none absolute -top-1 z-10 h-40 w-full bg-gradient-to-b from-white to-transparent" />
      <div className="pointer-events-none absolute -bottom-1 z-10 h-40 w-full bg-gradient-to-t from-white to-transparent" />
      <div className="pointer-events-none absolute -left-1 z-10 h-full w-40 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute -right-1 z-10 h-full w-40 bg-gradient-to-l from-white to-transparent" />
      <div
        className="animate-skew-scroll mx-auto grid h-[250px] w-[300px] grid-cols-1 gap-5 sm:w-[600px] sm:grid-cols-2"
        style={{
          animationPlayState: 'paused'
        }}
      >
        <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
          <svg
            className="h-6 w-6 flex-none text-violet-600"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            Custom usage limits
          </p>
        </div>
        <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
          <svg
            className="h-6 w-6 flex-none text-violet-600"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            Volume discounts
          </p>
        </div>
        <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
          <svg
            className="h-6 w-6 flex-none text-violet-600"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            SSO/SAML
          </p>
        </div>
        <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
          <svg
            className="h-6 w-6 flex-none text-violet-600"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            Role-based access controls
          </p>
        </div>
        <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
          <svg
            className="h-6 w-6 flex-none text-violet-600"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            Custom contract & SLA
          </p>
        </div>
        <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
          <svg
            className="h-6 w-6 flex-none text-violet-600"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            Whiteglove onboarding
          </p>
        </div>
        <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
          <svg
            className="h-6 w-6 flex-none text-violet-600"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            Dedicated success manager
          </p>
        </div>
        <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
          <svg
            className="h-6 w-6 flex-none text-violet-600"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            Priority support
          </p>
        </div>
        <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
          <svg
            className="h-6 w-6 flex-none text-violet-600"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            Dedicated Slack channel
          </p>
        </div>
        <div
          aria-hidden="true"
          className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
        >
          <svg
            className="h-6 w-6 flex-none text-violet-600"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            Custom usage limits
          </p>
        </div>
        <div
          aria-hidden="true"
          className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
        >
          <svg
            className="h-6 w-6 flex-none text-violet-600"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            Volume discounts
          </p>
        </div>
        <div
          aria-hidden="true"
          className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
        >
          <svg
            className="h-6 w-6 flex-none text-violet-600"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            SSO/SAML
          </p>
        </div>
        <div
          aria-hidden="true"
          className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
        >
          <svg
            className="h-6 w-6 flex-none text-violet-600"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            Role-based access controls
          </p>
        </div>
        <div
          aria-hidden="true"
          className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
        >
          <svg
            className="h-6 w-6 flex-none text-violet-600"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            Custom contract & SLA
          </p>
        </div>
        <div
          aria-hidden="true"
          className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
        >
          <svg
            className="h-6 w-6 flex-none text-violet-600"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            Whiteglove onboarding
          </p>
        </div>
        <div
          aria-hidden="true"
          className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
        >
          <svg
            className="h-6 w-6 flex-none text-violet-600"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            Dedicated success manager
          </p>
        </div>
        <div
          aria-hidden="true"
          className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
        >
          <svg
            className="h-6 w-6 flex-none text-violet-600"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            Priority support
          </p>
        </div>
        <div
          aria-hidden="true"
          className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
        >
          <svg
            className="h-6 w-6 flex-none text-violet-600"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M8 11.8571L10.5 14.3572L15.8572 9"
              stroke="white"
            />
          </svg>
          <p className="text-gray-600">
            Dedicated Slack channel
          </p>
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
      Check out our changelog to see what's new on vercl.co
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
            Unveiling vercl.co's New Chapter
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
            Unveiling vercl.co's New Chapter
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
<div className="mx-auto w-medium max-w-screen-xl px-2.5 lg:px-10 pb-10 pt-5">
</div>
    </>
  );
}
