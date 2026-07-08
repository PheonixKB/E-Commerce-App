import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

import AuthInput from "../components/AuthInput";
import GoogleButton from "../components/GoogleButton";

import {assets, products} from "../assets/frontend_assets/assets";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen bg-stone-50">

      <div className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2">

        {/* Left Side */}

        <div className="relative hidden lg:block overflow-hidden">

          <img
            src={products[38].image}
            alt="Fashion"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute bottom-12 left-12 max-w-sm text-white">

            <p className="mb-3 text-sm uppercase tracking-[6px]">
              Forever Collection
            </p>

            <h1 className="text-5xl font-light leading-tight">
              Style that
              <br />
              speaks quietly.
            </h1>

            <p className="mt-6 text-white/90 leading-7">
              Discover timeless fashion crafted for
              everyday confidence and effortless elegance.
            </p>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex items-center justify-center px-6 py-12">

          <div className="w-full max-w-md">

            <p className="mb-2 text-sm uppercase tracking-[5px] text-stone-500">
              Welcome Back
            </p>

            <h2 className="text-4xl font-bold text-stone-900">
              Sign in
            </h2>

            <p className="mt-4 leading-7 text-stone-500">
              Sign in to continue shopping,
              manage your orders and wishlist.
            </p>

            {/* Form */}

            <form className="mt-10 space-y-6">

              <AuthInput
                label="Email Address"
                placeholder="Enter your email"
                icon={Mail}
                type="email"
              />

              <AuthInput
                label="Password"
                placeholder="Enter your password"
                icon={Lock}
                type={showPassword ? "text" : "password"}
                rightIcon={
                  showPassword ? EyeOff : Eye
                }
                onRightIconClick={() =>
                  setShowPassword(!showPassword)
                }
              />

              {/* Remember */}

              <div className="flex items-center justify-between text-sm">

                <label className="flex items-center gap-3 text-stone-600">

                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-stone-800"
                  />

                  Remember me

                </label>

                <button
                  type="button"
                  className="font-medium text-stone-700 hover:text-black"
                >
                  Forgot Password?
                </button>

              </div>

              {/* Login */}

              <button
                className="h-14 w-full rounded-xl bg-stone-900 text-white transition hover:bg-stone-800"
              >
                Sign In
              </button>

            </form>

            <div className="my-8 flex items-center gap-4">

              <div className="h-px flex-1 bg-stone-300" />

              <span className="text-sm text-stone-400">
                OR
              </span>

              <div className="h-px flex-1 bg-stone-300" />

            </div>

            <GoogleButton />

            <p className="mt-10 text-center text-stone-500">

              Don't have an account?

              <Link
                to="/register"
                className="ml-2 font-semibold text-stone-900 hover:underline"
              >
                Create one
              </Link>

            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Login;