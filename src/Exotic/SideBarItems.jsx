import { NavLink } from "react-router-dom";

const SideBarItems = () => {
  return (
    <div>
      <ul className="mt-4">
        <NavLink
          to={"/medicine1"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center .space-x-4 rounded bg-cyan-700 text-white"
              : "flex items-center .space-x-4"
          }
        >
            <p className="border border-zinc-400 p-2 ]">All Medicixne</p>
        </NavLink>
        <NavLink
          to={"/medicine2"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center .space-x-4 rounded bg-cyan-700 text-white"
              : "flex items-center .space-x-4"
          }
        >
            <p className="border border-zinc-400 p-2">All Medicixne</p>
        </NavLink>
        <NavLink
          to={"/medicine3"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center .space-x-4 rounded bg-green-600 text-white"
              : "flex items-center .space-x-4"
          }
        >
            <p className="border border-zinc-400 p-2">All Medicixne</p>
        </NavLink>
        <NavLink
          to={"/medicine3"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center .space-x-4 rounded bg-green-600 text-white"
              : "flex items-center .space-x-4"
          }
        >
            <p className="border border-zinc-400 p-2">All Medicixne</p>
        </NavLink>
        <NavLink
          to={"/medicine3"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center .space-x-4 rounded bg-green-600 text-white"
              : "flex items-center .space-x-4"
          }
        >
            <p className="border border-zinc-400 p-2">All Medicixne</p>
        </NavLink>
        <NavLink
          to={"/medicine3"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center .space-x-4 rounded bg-green-600 text-white"
              : "flex items-center .space-x-4"
          }
        >
            <p className="border border-zinc-400 p-2">All Medicixne</p>
        </NavLink>
        <NavLink
          to={"/medicine3"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center .space-x-4 rounded bg-green-600 text-white"
              : "flex items-center .space-x-4"
          }
        >
            <p className="border border-zinc-400 p-2">All Medicixne</p>
        </NavLink>
        <NavLink
          to={"/medicine3"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center .space-x-4 rounded bg-green-600 text-white"
              : "flex items-center .space-x-4"
          }
        >
            <p className="border border-zinc-400 p-2">All Medicixne</p>
        </NavLink>

      </ul>
    </div>
  );
};

export default SideBarItems;
