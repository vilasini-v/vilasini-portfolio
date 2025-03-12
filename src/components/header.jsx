import { Link } from "react-router-dom";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

export function Navbar({ color }) {
  return (
    <div
      className={`w-full p-4 ${
        color === "green"
          ? "bg-algae text-beige"
          : color === "beige"
          ? "bg-beige text-algae"
          : "bg-gray-500 text-black"
      }`}
    >
      <div className="flex flex-row justify-between px-4">
        <div className="hidden md:hidden lg:flex flex-row items-center w-1/3">
          <StarRoundedIcon fontSize="large" />
          <p className="text-4xl font-bold font-[Hahmlet] px-5 tracking-widest">
            vilasini vijay
          </p>
        </div>
        <div className="flex justify-end w-auto space-x-4 items-center">
          <Link className="text-2xl md:text-xl text-xs sm:text-xs" to="/">
            About Me
          </Link>
          <Link className="text-2xl md:text-xl text-xs sm:text-xs" to="/resume">
            Resume
          </Link>
          <Link className="text-2xl md:text-xl text-xs sm:text-xs" to="/work">
            Work
          </Link>
          <Link
            className={`p-3 items-center rounded-3xl text-2xl md:text-xl text-xs sm:text-xs ${
              color === "beige"
                ? "bg-algae text-beige"
                : color === "green"
                ? "bg-beige text-algae"
                : "bg-gray-500 text-black"
            }`}
            to="/contact"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
