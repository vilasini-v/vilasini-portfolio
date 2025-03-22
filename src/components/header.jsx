import { Link } from "react-router-dom";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

export function Navbar({ color }) {
  const handleOpenResume = () => {
    window.open("https://drive.google.com/file/d/10jzILRPlsYj-PfCrSMz536zWhh8oysmz/view?usp=drive_link", "_blank");
  };  
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
          <Link className="text-2xl md:text-xl text-xs sm:text-xs">
            <button className="" onClick={handleOpenResume}>
              Resume
            </button>
          </Link>
          <Link className="text-2xl md:text-xl text-xs sm:text-xs" to="/work">
            Work
          </Link>
        </div>
      </div>
    </div>
  );
}
