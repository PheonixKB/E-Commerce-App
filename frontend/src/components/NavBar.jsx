import { Link, NavLink } from "react-router-dom";
import { Search, Heart, ShoppingCart, User, MenuIcon, X } from "lucide-react";
import { assets } from "../assets/frontend_assets/assets.js";
import { useState } from "react";

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const navLinkClass = ({ isActive }) =>
        `relative pb-1 text-stone-700
        after:content-[''] after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:bg-stone-600 after:transition-all after:duration-300
        ${
            isActive
                ? "after:w-full text-stone-600"
                : "after:w-0 hover:after:w-full hover:text-stone-600"
        }`;
  return (
    <>
        <nav className="sticky top-0 z-50 bg-white border-b border-stone-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <NavLink to="/">
                        <img
                        src={assets.logo}
                        alt="Forever Logo"
                        className="h-14 w-auto object-contain"
                        />
                    </NavLink>

                    {/* Navigation Links */}
                    <ul className="hidden md:flex items-center gap-8 text-stone-700 font-medium">

                        <li>
                            <NavLink to="/" end className={navLinkClass}>
                                Home
                            </NavLink>
                        </li>

                        <li>
                        <NavLink to="/collection" className={navLinkClass}>
                            Collection
                        </NavLink>
                        </li>

                        <li>
                        <NavLink to="/about" className={navLinkClass}>
                            About
                        </NavLink>
                        </li>

                        <li>
                        <NavLink
                            to="/contact"
                            className={navLinkClass}
                        >
                            Contact
                        </NavLink>
                        </li>

                    </ul>

                    {/* Right Icons */}
                    <div className="flex items-center gap-4">

                        <Search
                        size={22}
                        className="text-stone-700"
                        />

                        <Heart
                        size={22}
                        className="text-stone-700"
                        />
                        <Link to="/cart" className="relative">
                            <ShoppingCart
                            size={22}
                            className="cursor-pointer text-stone-700 hover:text-stone-900 transition"
                            />
                            <p className="absolute -top-1 -right-2 bg-stone-800 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                            0
                            </p>
                        </Link>

                        <User
                        size={22}
                        className="text-stone-700"
                        />
                        <Link to="/login">
                            <button className="bg-stone-700 text-white px-5 py-2 rounded-lg hover:bg-stone-900 transition">
                            Login
                            </button>
                        </Link>
                        <button className="md:hidden" onClick={() => setVisible(true)}>
                            <MenuIcon size={22} className="cursor-pointer text-stone-700 hover:text-stone-900 transition" />
                        </button>
                            
                    </div>


                </div>
            </div>
        </nav>
      
        {/* Mobile Menu */}
        <div
        className={`fixed top-0 right-0 z-50 h-screen w-72 bg-white shadow-xl
        transition-transform duration-300
        md:hidden
        ${visible ? "translate-x-0" : "translate-x-full"}`}
        >
            <div className="flex justify-end p-6">
                <button
                    onClick={() => setVisible(false)}
                    className="text-stone-700 hover:text-stone-900 transition"
                    aria-label="Close menu"
                >
                    <X size={26} />
                </button>
            </div>

            <ul className="flex flex-col gap-8 mt-6 text-lg font-medium">
                <li>
                    <NavLink
                        to="/"
                        end
                        onClick={() => setVisible(false)}
                        className={({ isActive }) =>
                            `relative block w-full py-3 text-center text-stone-700
                            after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2
                            after:bottom-0 after:h-[2px] after:bg-stone-600
                            after:transition-all after:duration-300
                            ${
                                isActive
                                    ? "after:w-14 text-stone-600"
                                    : "after:w-0 hover:after:w-14 hover:text-stone-600"
                            }`
                        }
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/collection"
                        end
                        onClick={() => setVisible(false)}
                        className={({ isActive }) =>
                            `relative block w-full py-3 text-center text-stone-700
                            after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2
                            after:bottom-0 after:h-[2px] after:bg-stone-600
                            after:transition-all after:duration-300
                            ${
                                isActive
                                    ? "after:w-20 text-stone-600"
                                    : "after:w-0 hover:after:w-20 hover:text-stone-600"
                            }`
                        }
                    >
                        Collection
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/about"
                        onClick={() => setVisible(false)}
                        className={({ isActive }) =>
                            `relative block w-full py-3 text-center text-stone-700
                            after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2
                            after:bottom-0 after:h-[2px] after:bg-stone-600
                            after:transition-all after:duration-300
                            ${
                                isActive
                                    ? "after:w-14 text-stone-600"
                                    : "after:w-0 hover:after:w-14 hover:text-stone-600"
                            }`
                        }
                    >
                        About
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/contact"
                        onClick={() => setVisible(false)}
                        className={({ isActive }) =>
                            `relative block w-full py-3 text-center text-stone-700
                            after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2
                            after:bottom-0 after:h-[2px] after:bg-stone-600
                            after:transition-all after:duration-300
                            ${
                                isActive
                                    ? "after:w-16 text-stone-600"
                                    : "after:w-0 hover:after:w-16 hover:text-stone-600"
                            }`
                        }
                    >
                        Contact
                    </NavLink>
                </li>

            </ul>
        </div>
    </>
  );
};

export default Navbar;
