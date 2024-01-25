"use client";
export function Pricing() {
  return (
    <>
<div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 mb-8 mt-16">
  <div className="mx-auto mb-6 text-center sm:max-w-lg">
    <h1 className="font-display text-4xl font-extrabold text-black [text-wrap:balance] sm:text-5xl sm:leading-tight">
      <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
        Straight forward,
      </span>
      {' '}affordable pricing
    </h1>
    <p className="mt-5 text-gray-600 sm:text-lg">
      Find a plan that fits your needs.{' '}
      <br />
      {' '}Start for free, no credit card required.
    </p>
  </div>
  <div className="mx-auto mb-12 flex max-w-fit items-center space-x-2 text-center">
    <p className="w-14 font-medium text-gray-600">
      Monthly
    </p>
    <div
      style={{
        position: 'relative'
      }}
     />
    <button
      aria-checked="true"
      className="radix-state-checked:bg-blue-500 radix-state-unchecked:bg-gray-200 cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 relative inline-flex flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out h-5 w-11"
      data-state="checked"
      role="switch"
      type="button"
      value="on"
    >
      <span
        className="radix-state-checked:translate-x-6 radix-state-unchecked:translate-x-0 pointer-events-none transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out h-4 w-4 translate-x-6"
        data-state="checked"
      />
    </button>
    <p className="w-14 font-medium text-gray-600">
      Yearly
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
          href="https://app.dub.co/register"
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
          href="https://app.dub.co/register"
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
          href="https://app.dub.co/register"
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
          Dub{' '}
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
        Contact us
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
      </>
  );
}
