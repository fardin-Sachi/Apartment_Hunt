"use client"
import React, {useState} from 'react'
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import Link from "next/link";
import Button from './common/button';

const navItems = [
    {
        id: 1,
        title: "Home",
        path: "/"
    },
    {
        id: 2,
        title: "About",
        path: "/about"
    },{
        id: 3,
        title: "Service",
        path: "/service"
    },{
        id: 4,
        title: "Concerns",
        path: "/concerns"
    },{
        id: 5,
        title: "Event",
        path: "/event"
    },{
        id: 6,
        title: "Contact",
        path: "/contact"
    },
]
export default function Navbar() {
    const [openedMenu, setOpenedMenu] = useState(false)

    const handleNav = () => {
        setOpenedMenu(!openedMenu)
    }
  return (
    <nav className="w-full bg-white relative">
      <div className="container pt-8 pb-5">
        <div className="flex justify-between items-center ">
          <Link href="/">
            {" "}
            {/* Website Logo */}
            <Image
              src="/images/logo.svg"
              alt="Apartment Hunt"
              width={100}
              height={55}
              className="cursor-pointer"
            />
          </Link>
          {/* Main Navigation Bar */}
          <div className="hidden md:flex gap-x-[38px]">
            <ul className="hidden sm:flex lg:gap-x-10 gap-x-5 items-center">
              {navItems?.map((item) => (
                <Link href={item.path}>
                  <li className="text-black text-base tracking-tight text-16 font-medium font-poppins">
                    {item?.title}
                  </li>
                </Link>
              ))}
            </ul>
            <Link href="/account">
              <Button title={"Login"} classes='text-base text-center font-medium font-Montserrat bg-HouseRent text-white w-[104px] h-[44px] py-[12px] px-[29px] rounded-[5px] justify-start items-center gap-2.5 inline-flex' />
            </Link>
          </div>

          {/* Small Devices */}
          <div className="flex md:hidden">
            <div onClick={handleNav} className="cursor-pointer pl-4">
              {openedMenu ? (
                <AiOutlineClose size={25} />
              ) : (
                <AiOutlineMenu size={25} />
              )}
            </div>
          </div>
        </div>

      </div>
      {/* Dropdown Menu */}
      {openedMenu && (
        <div className="absolute z-50 w-full right-0 bg-white flex flex-col px-4">
          {navItems?.map((item) => (
            <Link href={item?.path} className="text-center text-xl font-medium border-b p-2">
              {item?.title}
            </Link>
          ))}
            <Link href="/account" className='text-center text-xl font-medium border-b p-2'>
                Login
            </Link>
        </div>
      )}
    </nav>
  )
}