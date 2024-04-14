import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Bars4Icon, UserCircleIcon } from "@heroicons/react/24/outline";

const listItems = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Estadistica",
    path: "/statistics",
  },
  {
    name: "Tiempo real",
    path: "/real-time",
  },
];

const Header = () => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <nav
      style={{
        boxShadow: "0 2px 4px 0 rgba(0,0,0,0.1)",
      }}
      className="w-full py-4 bg-white text-secondary text-sm">
      <div className="w-[90%] lg:w-3/4 mx-auto flex items-center justify-between">
        <div className="ml-12 md:ml-0 flex items-center gap-4">
          <button>
            <Bars4Icon className="w-12 h-12 md:hidden" />
          </button>
          <Link href="/">
            <img src="/assets/celsia-logo-naranja.png" alt="logo" />
          </Link>
        </div>
        <ul className="hidden md:flex gap-6">
          {listItems.map((item, index) => (
            <Link
              className={`font-semibold ${
                path === item.path ? "text-primary" : "text-secondary"
              } hover:text-primary transition-all`}
              key={item.name}
              href={item.path}>
              {item.name}
            </Link>
          ))}
        </ul>
        <button className="hidden md:flex gap-2 items-center hover:text-primary transition-all">
          <UserCircleIcon className="w-6 h-6" />
          Mi cuenta
        </button>
      </div>
    </nav>
  );
};

export default Header;
