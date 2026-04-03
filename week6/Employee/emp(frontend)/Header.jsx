import { NavLink } from "react-router";
import { counterContextObj } from "../context/contextprovider";
import { useContext } from "react";

function Header() {

    const {counter} = useContext(counterContextObj)
  return (
    <nav className="flex justify-end text-3xl p-7 bg-orange-400 text-black gap-6">
      <span className="mr-auto font-bold">Counter: {counter}</span> 
      <NavLink to="" className={({ isActive }) => (isActive ? "text-yellow-400" : "")}>
        Home
      </NavLink>
      <NavLink to="create-emp" className={({ isActive }) => (isActive ? "text-yellow-300" : "")}>
        CreateEmp
      </NavLink>
      <NavLink to="list" className={({ isActive }) => (isActive ? "text-yellow-400" : "")}>
        Employees List
      </NavLink>
    </nav>
  );
}

export default Header;