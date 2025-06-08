import { Search } from "lucide-react";
import { NavLink } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  return (
    <div className="max-w-7xl mx-auto flex items-center p-6 justify-between">
      <h1 className="text-3xl font-bold">
        hamro<span className="text-green-500">ui</span>
      </h1>
      <div className="flex gap-4 items-center">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-green-500" : "text-gray-600"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/docs"}
          className={({ isActive }) =>
            isActive ? "text-green-500" : "text-gray-600"
          }
        >
          Docs
        </NavLink>
        <NavLink
          to={"/components"}
          className={({ isActive }) =>
            isActive ? "text-green-500" : "text-gray-600"
          }
        >
          Components
        </NavLink>
        <div className="relative">
          <input
            type="search"
            placeholder="Search components"
            className="border px-2 py-1 pl-8 rounded-lg top-1/3 left-0 -translate-y-1/2 absolute border-slate-500 outline-none focus:border-green-500"
          />
          <Search className="left-1 top-1/3 absolute -translate-y-1/2" />
        </div>
      </div>
      <div className="flex items-center">
        <ModeToggle />
      </div>
    </div>
  );
}
