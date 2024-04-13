import React from "react";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <div
      className="navbar bg-primary-1 fixed top-0 z-10"
      style={{
        boxShadow: "4.2px 8.3px 8.3px hsl(0deg 0% 0% / 0.37);",
      }}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-white">Celsia</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className={`${path === "/" ? "text-white" : ""}`}>
            <a>Inicio</a>
          </li>
          <li className={`${path === "/csv" ? "text-white" : ""}`}>
            <a>CSV</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Header;
