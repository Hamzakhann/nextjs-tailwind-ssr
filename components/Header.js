import React from "react";
import {
  BadgeCheckIcon,
  HomeIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="BADGE" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
        <HeaderItem title="Lightning" Icon={LightningBoltIcon} />
        <HeaderItem title="Search" Icon={SearchIcon} />
        <HeaderItem title="User" Icon={UserIcon} />
      </div>
      <Image alt="logo" src={"/Assets/logo.png"} width={100} height={50} />
    </header>
  );
};

export default Header;
