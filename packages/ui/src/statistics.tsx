"use client";
export function Statistics() {
  return (
    <>
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
      </>
  );
}
