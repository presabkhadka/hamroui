import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 h-screen overflow-hidden">
      <div className="col-span-full ">
        <div className=" shadow-lg border-b-2 top-0 sticky z-50">
          <Navbar />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 h-full ">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-center leading-12">
              Crafted for React, <br className="md:hidden"/> styled with Tailwind
              <br />
              hamro<span className="text-green-500">ui</span>
            </h1>
          </div>
          <div>
            <p className="p-4 max-w-lg md:mx-auto md:max-w-4xl text-justify font-thin">
              Hamroui is an open-source React component library designed with
              Tailwind CSS to help developers build beautiful, responsive
              interfaces effortlessly. Hamroui aims to provide a seamless
              developer experience with fully customizable and accessible
              components. The project is actively maintained and developed by
              the community.
            </p>
          </div>
          <div className="flex gap-4">
            <button
              className="rounded-lg px-4 py-2 bg-gradient-to-r from-green-500 to-yellow-500 text-white hover:bg-green-400 cursor-pointer shadow-lg hover:scale-105 transition-all"
              onClick={() => {
                navigate("/components");
              }}
            >
              Explore Components
            </button>
            <button
              className="rounded-lg px-4 py-2 border bg-none hover:bg-muted cursor-pointer shadow-lg hover:scale-105 transition-all"
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
