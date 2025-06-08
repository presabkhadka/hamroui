import Navbar from "../components/navbar";

export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 h-screen">
      <div className="col-span-full h-full">
        <div className=" shadow-lg border-b-2 top-0 sticky z-50 bg-white dark:bg-black">
          <Navbar />
        </div>
        <div className="p-6 w-full md:max-w-7xl mx-auto flex flex-col gap-8">
          <span className="text-4xl font-bold bg-gradient-to-r from-green-500 to-green-300 text-transparent bg-clip-text text-center">
            About Us
          </span>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <img src="logo.jpg" alt="logo" className="rounded-lg"/>
            <p className="text-justify leading-8 text-lg">
              Hamroui is an open-source React component library built with
              Tailwind CSS, crafted to make UI development faster, cleaner, and
              more consistent. Whether you're building a dashboard, marketing
              site, or a modern web app, Hamroui provides a growing collection
              of reusable and accessible components designed for real-world use.
              We created Hamroui out of a need for a design system that aligns
              with modern frontend workflows—simple to use, easy to customize,
              and fully open to the community. Our mission is to empower
              developers with tools that save time without sacrificing quality
              or flexibility. Hamroui is actively maintained by passionate
              developers who believe in collaboration, clean code, and
              community-first development. We welcome contributors of all levels
              and strive to make Hamroui a welcoming space for everyone looking
              to build beautiful interfaces the modern way. Together, let's
              shape the future of frontend—one component at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
