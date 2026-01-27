import { FaBars } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 ">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Logo" className="w-16 h-16 object-contain" />
      </div>

      <div className="flex items-center gap-10">
        {/* Enquire Button */}
        <button className="bg-[#0E2954] text-white px-5 py-2 rounded-md text-sm hover:bg-[#1a376b] transition">
          ENQUIRE
        </button>

        {/* Menu Icon */}
        <FaBars className="text-2xl text-gray-500 cursor-pointer" />
      </div>
    </nav>
  );
}
