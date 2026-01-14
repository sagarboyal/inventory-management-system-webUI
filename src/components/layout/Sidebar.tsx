import { sidebarData } from "./sidebarData";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-white w-64 shrink-0 p-6 shadow-sm">
      <div className="space-y-6">
        {sidebarData.map((section, index) => (
          <div key={index}>
            <p className="text-xs font-bold">{section.title}</p>

            <div className="mt-2 mx-3 space-y-1">
              {section.items.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={idx}
                    to={item.path || "/"}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition ${
                        isActive ? "text-primary-900" : "text-gray-900"
                      }`
                    }
                  >
                    <Icon size={16} />
                    <span className="text-sm font-light">{item.name}</span>
                  </NavLink>
                );
              })}
            </div>

            {index !== sidebarData.length - 1 && (
              <hr className="border-gray-200 my-4" />
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
