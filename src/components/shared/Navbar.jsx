import React from "react";

import logoImg from "../../assets/img/logo.png";
import { FaGithub } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const navItems = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/apps",
      text: "Apps",
    },
    {
      path: "/installation",
      text: "Installation",
    },
    {
      path: "/dashboard",
      text: "Dashboard",
    },
  ];

  return (
    <nav className=" shadow">
      <div className="flex justify-between gap-4 items-center  py-2 container mx-auto">
        {/* <Image src={logoImg} alt="PH Play Store" width={50} height={50} /> */}
        <Image src={"https://png.pngtree.com/png-clipart/20190611/original/pngtree-wolf-logo-png-image_2306634.jpg"} alt="PH Play Store" width={50} height={50} />
        <Image src={"https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740&q=80"} alt="PH Play Store" width={50} height={50} />
        <ul className="flex justify-between gap-2 items-center">
          {navItems.map((item, index) => (
            <Link key={index} href={item.path}>
              {item.text}
            </Link>
          ))}

          {/* 
          <li>
            <MyNavLink to={"/"}>Home</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/apps"}>Apps</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/installedApps"}>Installation</MyNavLink>
          </li> */}
        </ul>
        <button className="btn bg-purple-500 text-white">
          <FaGithub />
          Contribute
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
