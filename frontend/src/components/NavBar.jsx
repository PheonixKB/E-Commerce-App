import { Link, NavLink } from "react-router-dom";
import { Search, Heart, ShoppingCart, User, MenuIcon } from "lucide-react";
import { assets } from "../assets/frontend_assets/assets.js";
import { useState } from "react";

const Navbar = () => {
    const [visible, setVisible] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <NavLink to="/">
                <img
                src={assets.logo}
                alt="TechStore Logo"
                className="h-14 w-auto object-contain"
                />
            </NavLink>

            {/* Navigation Links */}
            <ul className="hidden md:flex items-center gap-10 text-stone-700 font-medium">

                <li>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `relative pb-1 text-stone-700
                            after:content-[''] after:absolute after:left-0 after:-bottom-1
                            after:h-[2px] after:bg-stone-600 after:transition-all after:duration-300
                            ${
                            isActive
                                ? "after:w-full text-stone-600"
                                : "after:w-0 hover:after:w-full hover:text-stone-600"
                            }`
                        }
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                <NavLink
                    to="/collection"
                    className={({ isActive }) =>
                        `relative pb-1 text-stone-700 after:absolute after:left-0 after:-bottom-1
                        after:h-[2px] after:bg-stone-600 after:transition-all after:duration-300
                        ${
                            isActive
                                ? "after:w-full text-stone-600"
                                : "after:w-0 hover:after:w-full hover:text-stone-600"
                        }`
                    }
                >
                    Collection
                </NavLink>
                </li>

                <li>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                    `relative pb-1 text-stone-700 after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:bg-stone-600 after:transition-all after:duration-300
                    ${
                        isActive
                        ? "after:w-full text-stone-600"
                        : "after:w-0 hover:after:w-full hover:text-stone-600"
                    }`
                    }
                >
                    About
                </NavLink>
                </li>

                <li>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                    `relative pb-1 text-stone-700 after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:bg-stone-600 after:transition-all after:duration-300
                    ${
                        isActive
                        ? "after:w-full text-stone-600"
                        : "after:w-0 hover:after:w-full hover:text-stone-600"
                    }`
                    }
                >
                    Contact
                </NavLink>
                </li>

            </ul>

            {/* Right Icons */}
            <div className="flex items-center gap-5">

                <Search
                size={22}
                className="cursor-pointer text-stone-700 hover:text-blue-600 transition"
                />

                <Heart
                size={22}
                className="cursor-pointer text-stone-700 hover:text-red-500 transition"
                />
                <Link to="/cart" className="relative">
                    <ShoppingCart
                    size={22}
                    className="cursor-pointer text-stone-700 hover:text-blue-600 transition"
                    />
                    <p className="absolute top-[-5px] -right-2 bg-stone-800 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    0
                    </p>
                </Link>

                <User
                size={22}
                className="cursor-pointer text-stone-700 hover:text-blue-600 transition"
                />
                <Link to="/login">
                    <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                    Login
                    </button>
                </Link>
                <button className="md:hidden" onClick={() => setVisible(true)}>
                    <MenuIcon size={22} className="cursor-pointer text-stone-700 hover:text-blue-600 transition" />
                </button>
                    
            </div>

            {/* Mobile Menu */}
            <div
            className={`fixed top-0 right-0 h-screen w-72 bg-white shadow-xl px-20 py-6 z-50
            transform transition-transform duration-300 ease-in-out
            ${visible ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex justify-end p-5">
                    <button
                        onClick={() => setVisible(false)}
                        className="text-3xl"
                        >
                        ✕
                    </button>
                </div>

                <ul className="flex flex-col gap-6 px-8 text-lg font-medium">

                    <li>
                    <NavLink
                        to="/"
                        onClick={() => setVisible(false)}
                        className="text-stone-700 hover:text-stone-900"
                    >
                        Home
                    </NavLink>
                    </li>

                    <li>
                    <NavLink
                        to="/collection"
                        onClick={() => setVisible(false)}
                        className="text-stone-700 hover:text-stone-900"
                    >
                        Collection
                    </NavLink>
                    </li>

                    <li>
                    <NavLink
                        to="/about"
                        onClick={() => setVisible(false)}
                        className="text-stone-700 hover:text-stone-900"
                    >
                        About
                    </NavLink>
                    </li>

                    <li>
                    <NavLink
                        to="/contact"
                        onClick={() => setVisible(false)}
                        className="text-stone-700 hover:text-stone-900"
                    >
                        Contact
                    </NavLink>
                    </li>

                </ul>
            </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;