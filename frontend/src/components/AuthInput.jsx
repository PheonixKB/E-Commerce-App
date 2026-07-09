import React from "react";

const AuthInput = ({
  label,
  type = "text",
  placeholder,
  icon: Icon,
  rightIcon: RightIcon,
  onRightIconClick,
  value,
  onChange,
  name,
  error,
}) => {
  return (
    <div className="space-y-2">

      <label className="text-sm font-medium text-stone-700">
        {label}
      </label>

      <div
        className={`flex items-center rounded-xl border bg-white transition
        ${
          error
            ? "border-red-500"
            : "border-stone-300 focus-within:border-stone-700 focus-within:ring-2 focus-within:ring-stone-200"
        }`}
      >

        {/* Left Icon */}

        {Icon && (
          <div className="flex h-14 w-14 items-center justify-center text-stone-400">
            <Icon size={20} />
          </div>
        )}

        {/* Input */}

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="h-14 flex-1 bg-transparent text-stone-800 placeholder:text-stone-400 focus:outline-none"
        />

        {/* Right Icon */}

        {RightIcon && (
          <button
            type="button"
            onClick={onRightIconClick}
            className="flex h-14 w-14 items-center justify-center text-stone-400 hover:text-stone-700"
          >
            <RightIcon size={20} />
          </button>
        )}

      </div>

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}

    </div>
  );
};

export default AuthInput;