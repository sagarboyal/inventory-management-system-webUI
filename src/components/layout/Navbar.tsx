import { IoNotificationsOutline } from "react-icons/io5";
import { images } from "../../constants/images";
import { FaAngleDown, FaLaptop } from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";

function Navbar() {
  return (
    <header>
      <nav className="flex border border-gray-200">
        <div className="flex">
          <div className="py-3.5 pl-4 pr-30">
            <a href="/">
              <img className="w-28 h-9" src={images.logo} alt="dreams pos" />
            </a>
          </div>

          <div className="py-3.5">
            <button
              className="flex p-1.5 gap-1 border justify-between items-center rounded-xl border-gray-300 cursor-pointer"
              type="button"
            >
              <img className="h-4" src={images.food_img} alt="" />
              <span className="text-gray-700">Freshmart</span>
              <FaAngleDown className="text-gray-500" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 ml-auto px-6">
          <div className="py-3.5 px-5">
            <button
              className="flex px-3 py-1.5 gap-1.5 bg-[#092C4C] justify-between items-center rounded cursor-pointer"
              type="button"
            >
              <FaLaptop className="text-white" />
              <span className="text-white">POS</span>
            </button>
          </div>

          <div className="h-8 w-px bg-gray-300"> </div>

          <div className="flex gap-2">
            <button className="bg-gray-100 p-2 rounded">
              <img className="h-6 w-6" src={images.flag_img} alt="" />
            </button>

            <button className="bg-gray-100 p-2.5 rounded">
              <IoNotificationsOutline className="text-gray-700" />
            </button>

            <button className="bg-gray-100 p-2.5 rounded">
              <MdOutlineSettings className="text-gray-700" />
            </button>

            <button className="cursor-pointer">
              <img className="w-10" src={images.avatar_img} alt="" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
