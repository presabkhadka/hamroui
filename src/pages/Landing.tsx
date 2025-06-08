import Navbar from "../components/navbar";

export default function Landing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 h-screen dark:bg-muted/80">
      <div className="col-span-full">
        <div className=" shadow-lg h-fit">
          <Navbar />
        </div>
        hi there
      </div>
    </div>
  );
}
