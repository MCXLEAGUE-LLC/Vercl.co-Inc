"use client";
export function SubmitForum() {
  return (
    <>
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
      </>
  );
}
