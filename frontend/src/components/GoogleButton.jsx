import React from "react";
import { FcGoogle } from "react-icons/fc";

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
      <FcGoogle className="text-2xl" />

      <span className="text-[15px]">Continue with Google</span>
    </button>
  );
};

export default GoogleButton;
