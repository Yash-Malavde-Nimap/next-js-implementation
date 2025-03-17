"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  return (
    <div className="w-screen fixed top-0 left-0 p-6 bg-black text-neutral-200 border-b-[1px]">
      <div className="flex justify-center items-center space-x-5">
        <Link
          className={`${
            path === "/" ? "text-white font-bold" : ""
          } hover:text-neutral-500 duration-300 text-xl`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`${
            path === "/about" ? "text-white  font-bold" : ""
          } hover:text-neutral-500 duration-300 text-xl`}
          href="/about"
        >
          About
        </Link>
        <Link
          className={`${
            path === "/products" ? "text-white  font-bold" : ""
          } hover:text-neutral-500 duration-300 text-xl`}
          href="/products"
        >
          Products
        </Link>

        <Link
          className={`${
            path === "/users" ? "text-white  font-bold" : ""
          } hover:text-neutral-500 duration-300 text-xl`}
          href="/users"
        >
          Users
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
