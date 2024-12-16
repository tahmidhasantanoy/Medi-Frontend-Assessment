import { NavLink } from "react-router-dom";

const SideBarItems = () => {
  return (
    <div>
      <ul className="mt-4 px-4">
        <NavLink
          to={"/medicine1"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center rounded bg-cyan-700  border border-zinc-400 p-2   text-white"
              : "flex items-center   border border-zinc-400 p-2  "
          }
        >
          <p className=".border border-zinc-400 .p-2">All Medicine</p>
        </NavLink>
        <NavLink
          to={"/medicine2"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center   border border-zinc-400 p-2  rounded bg-cyan-700 text-white"
              : "flex items-center  border border-zinc-400 p-2   "
          }
        >
          <p className="">All Medicine</p>
        </NavLink>
        <NavLink
          to={"/medicine3"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center  border border-zinc-400 p-2  rounded bg-green-600 text-white"
              : "flex items-center  border border-zinc-400 p-2 "
          }
        >
          <p className="">All Medicine</p>
        </NavLink>
        <NavLink
          to={"/medicine3"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center  border border-zinc-400 p-2  rounded bg-green-600 text-white"
              : "flex items-center  border border-zinc-400 p-2 "
          }
        >
          <p className="">All Medicine</p>
        </NavLink>
        <NavLink
          to={"/medicine3"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center  border border-zinc-400 p-2  rounded bg-green-600 text-white"
              : "flex items-center  border border-zinc-400 p-2 "
          }
        >
          <p className="">All Medicine</p>
        </NavLink>
        <NavLink
          to={"/medicine3"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center  border border-zinc-400 p-2  rounded bg-green-600 text-white"
              : "flex items-center  border border-zinc-400 p-2 "
          }
        >
          <p className="">All Medicine</p>
        </NavLink>
        <NavLink
          to={"/medicine3"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center  border border-zinc-400 p-2  rounded bg-green-600 text-white"
              : "flex items-center  border border-zinc-400 p-2 "
          }
        >
          <p className="">All Medicine</p>
        </NavLink>
        <NavLink
          to={"/medicine3"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center  border border-zinc-400 p-2  rounded bg-green-600 text-white"
              : "flex items-center  border border-zinc-400 p-2 "
          }
        >
          <p className="">All Medicine</p>
        </NavLink>
      </ul>
    </div>
  );
};

export default SideBarItems;
