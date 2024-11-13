import Navbar from "./componentes/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
      <Navbar />
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <Navbar />
        <Navbar />
      </div>
      <Navbar />
    </div>
  );
}
