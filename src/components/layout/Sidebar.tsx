import { sidebarData } from "./sidebarData";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className=" bg-white border border-gray-200 w-62 p-6 gap-4   shadow-sm">
      <div className="gap-2 space-y-6">
        {sidebarData.map((section, index) => (
          <div key={index} className="  font-small mb-2 text-[#092C4C] ">
            <p
              className=" font-semibold space-y-1 w-63 h-4.5  
            "
            >
              {section.title}
            </p>
            <div className=" gap-2.5 mt-2 mr-3 mb-2 ml-3">
              {section.items.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={idx}
                    to={item.path || "/"}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition ${
                        isActive
                          ? " bg-orange-100 text-orange-60 shadow-sm"
                          : "text-gray-600 hover:bg-gray-100"
                      }`
                    }
                  >
                    <Icon size={10} />
                    <span className="text-sm font-medium">{item.name}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
