import React from "react";

const GoogleButton = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group
        flex
        w-full
        h-14
        items-center
        justify-center
        gap-4
        rounded-xl
        border
        border-stone-300
        bg-white
        px-6
        py-4
        font-medium
        text-stone-700
        transition-all
        duration-300
        hover:border-stone-500
        hover:bg-stone-100
        hover:shadow-md
        active:scale-[0.98]
      "
    >
      <svg width="22" height="22" viewBox="0 0 48 48" aria-hidden="true">
        <path
          fill="#FFC107"
          d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z"
        />
        <path
          fill="#FF3D00"
          d="m6.3 14.7 6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6 29.6 4 24 4c-7.7 0-14.4 4.4-17.7 10.7z"
        />
        <path
          fill="#4CAF50"
          d="M24 44c5.5 0 10.5-2.1 14.3-5.6l-6.6-5.6C29.6 34.7 26.9 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.5 16.2 44 24 44z"
        />
        <path
          fill="#1976D2"
          d="M43.6 20.5H42V20H24v8h11.3a12 12 0 0 1-4.1 5.8l6.6 5.6C41.5 36.1 44 30.5 44 24c0-1.2-.1-2.4-.4-3.5z"
        />
      </svg>

      <span className="text-[15px]">Continue with Google</span>
    </button>
  );
};

export default GoogleButton;
