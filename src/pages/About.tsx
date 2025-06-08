import Navbar from "../components/navbar";

export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 h-screen">
      <div className="col-span-full">
        <div className="top-0 sticky z-50 border-b-2">
          <Navbar />
        </div>
        <div className="p-6 max-w-7xl mx-auto">
            hi there this is a random ass
        </div>
      </div>
    </div>
  );
}
