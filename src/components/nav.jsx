import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="h-16 w-screen bg-[#d8dbe2] flex z-10 items-center justify-between px-5 pr-5 rounded-b-md md:fixed fixed top-0">
        <h2 className="font-bold text-2xl">Urban Nexus</h2>
        <div className="h-16 flex items-center gap-8 text-2xl">
          <Link to="/dashboard"> {/* Click Home icon to go to Dashboard */}
            <i className="fa-solid fa-house md:visible invisible cursor-pointer"></i>
          </Link>
          <i className="fa-solid fa-magnifying-glass md:visible invisible"></i>
          <i className="fa-solid fa-user md:visible invisible"></i>
          <i
            className="fa-solid fa-bars visible md:invisible cursor-pointer"
            onClick={() => setIsOpen(true)}
          ></i>
        </div>
      </nav>
    </div>
  );
}
