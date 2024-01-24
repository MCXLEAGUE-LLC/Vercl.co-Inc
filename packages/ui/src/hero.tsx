export function Hero(){
  return (
    <>
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
      </>
  );
}
