import { IoNotificationsOutline } from "react-icons/io5";
import { images } from "../../constants/images";
import { FaAngleDown, FaLaptop } from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";
import { useEffect, useState } from "react";

function Navbar() {
  const [time, setTime] = useState(new Date());

  const timeString = time.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const match = timeString.match(/(am|pm)/i);
  const period = match ? match[0].toUpperCase() : "";
  const clock = timeString.replace(/(am|pm)/i, "").trim();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header>
      <nav className="flex border border-gray-200">
        <div className="flex">
          <div className="py-3.5 pl-4 pr-30">
            <a href="/">
              <img className="w-28 h-9" src={images.logo} alt="dreams pos" />
            </a>
          </div>

          <div className="flex justify-start items-center gap-1">
            <p className="font-bold text-2xl text-gray-900">{clock}</p>
            <p className="font-light text-sm">
              {period?.toUpperCase()}
            </p>
          </div>
        </div>

        <div className="flex flex-1 justify-end items-center gap-2">
          <button
            className="flex h-9 p-1.5 gap-1 border justify-between items-center rounded-md border-gray-200 cursor-pointer"
            type="button"
          >
            <img className="h-4" src={images.food_img} alt="" />
            <span className="font-medium text-sm text-gray-900">Freshmart</span>
            <FaAngleDown className="text-gray-900" />
          </button>
          <button
            className="flex h-9 p-1.5 px-2 gap-1 border justify-between items-center rounded-md border-gray-200 cursor-pointer bg-[#092C4C]"
            type="button"
          >
            <FaLaptop className="text-white" />
            <span className="font-inter text-gray-100 text-sm">POS</span>
          </button>

          <div className="h-8 w-px bg-gray-300"> </div>

          <div className="flex items-center gap-2 mr-3">
            <button className="flex justify-center items-center h-9 w-9 bg-gray-100 rounded-md">
              <img className="h-6 w-6" src={images.flag_img} alt="" />
            </button>

            <button className="flex justify-center items-center h-9 w-9 bg-gray-100 rounded-md">
              <IoNotificationsOutline className="text-gray-700" size={18} />
            </button>

            <button className="flex justify-center items-center h-9 w-9 bg-gray-100 rounded-md">
              <MdOutlineSettings className="text-gray-700" size={18} />
            </button>

            <button className="cursor-pointer">
              <img className="w-9 h-9" src={images.avatar_img} alt="" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
