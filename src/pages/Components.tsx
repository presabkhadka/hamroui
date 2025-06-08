import Navbar from "../components/navbar";

export default function Components() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-screen overflow-hidden">
      <div className="col-span-full">
        <div className="top-0 sticky z-50 border-b-2">
          <Navbar />
        </div>
        <div className="grid grid-cols-4 gap-2 h-full overflow-y-scroll">
<div className="border-r p-4 col-span-1 overflow-y-scroll">components here</div>
<div className="p-4 flex grow col-span-3">description here</div>
        </div>
      </div>
    </div>
  );
}
