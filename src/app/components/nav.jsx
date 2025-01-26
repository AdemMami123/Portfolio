"use client";
import Link from "next/link";
import { usePathname, pathname } from "next/navigation";
import path from "path";

const Links = [
  { name: "Home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];
const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-8 ">
      {Links.map((link, index) => {
        return (
            <Link
            href={link.path}
            key={index}
            className={`${link.path === pathname ? 'text-accent border-b-2 border-accent' : ''}capitalize font-meduim hover:text-accent transation-all`}
            
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};
export default Nav;
