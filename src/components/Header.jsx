import React from "react";
import Profile from "../assets/images/profile.jpg";
import Logo from "../assets/images/logo-white.svg";
import { Link } from "react-router-dom";
import { UsersIcon, CommandLineIcon, ChatBubbleOvalLeftIcon, LinkIcon } from '@heroicons/react/24/outline'


export default function Header() {
  return (
    <header className=" fixed inset-0 h-20 rounded-full shadow-2xl m-5 bg-slate-800/95 text-white ">
      <div className="flex justify-between items-center w-full h-20 px-8 py-4">
        <Link to={"/"}>
          <img src={Logo} className="w-24 h-24 rounded-full" alt="logo" />
        </Link>

        <div className="flex justify-center items-center gap-x-8 text-lg">
          <Link to={"/users"} className="flex justify-around items-center gap-x-1 hover:text-orange-300 hover:border-b hover:border-orange-400"><UsersIcon className="size-6 text-white" />users</Link>
          <Link to={"/posts"} className="flex justify-around items-center gap-x-1 hover:text-orange-300 hover:border-b hover:border-orange-400"><CommandLineIcon className="size-6 text-white" />posts</Link>
          <Link to={"/abute"} className="flex justify-around items-center gap-x-1 hover:text-orange-300 hover:border-b hover:border-orange-400"><ChatBubbleOvalLeftIcon className="size-6 text-white" />abute</Link>
          <Link to={"/contact-as"} className="flex justify-around items-center gap-x-1 hover:text-orange-300 hover:border-b hover:border-orange-400"><LinkIcon className="size-6 text-white" />contact as</Link>
        </div>
        <Link to={"/profile"}>
          <img
            src={Profile}
            className="w-12 h-12 border rounded-full"
            alt="user-profile"
          />
        </Link>
      </div>
    </header>
  );
}
