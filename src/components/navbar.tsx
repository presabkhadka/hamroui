import { Menu, Search, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/components", label: "Components" },
  ];

  return (
    <nav className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4 md:p-6">
      <div className="flex items-center justify-between w-full md:w-auto">
        <h1 className="text-3xl font-bold">
          hamro<span className="text-green-500">ui</span>
        </h1>

        {/* Mobile toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 items-center text-xl">
        {navItems.map((navs) => (
          <NavLink
            key={navs.to}
            to={navs.to}
            className={({ isActive }) =>
              isActive
                ? "text-green-500 hover:text-green-400"
                : "text-gray-600 hover:text-gray-400 dark:text-gray-300 dark:hover:text-gray-100"
            }
          >
            {navs.label}
          </NavLink>
        ))}

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="search"
            placeholder="Search components"
            className="pl-8 pr-2 py-1 rounded-lg border border-slate-500 outline-none focus:border-green-500"
          />
        </div>
      </div>

      {/* Mode toggle desktop */}
      <div className="hidden md:flex items-center">
        <ModeToggle />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="w-full md:hidden mt-4 bg-white dark:bg-black shadow-md rounded-lg">
          <div className="flex flex-col gap-2 p-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-2 px-3 rounded transition-colors duration-200 ` +
                  (isActive
                    ? "bg-green-100 text-green-500"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800")
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
