"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";


export default function Header({ isAuthenticated }: { isAuthenticated: boolean }) {
    
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <header className="w-full px-4 sm:px-7 md:px-14 lg:px-28 py-3 flex justify-between items-end">
                {/* logo & mobile menu */}
                <div className="flex gap-3 md:gap-4 font-bold">
                    {/* mobile menu */}
                    <div className="flex self-center flex-col gap-[7px] md:hidden hover:cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <div className={`${isMobileMenuOpen ? "w-2.5 self-center": "w-4"} h-0.5 bg-black`}></div>
                        <div className="w-4 h-0.5 bg-black"></div>
                        <div className={`${isMobileMenuOpen ? "w-2.5 self-center": "w-4"} h-0.5 bg-black`}></div>
                    </div>
                    <Image className="self-end" src="/Logo.jpg" alt="logo" width={30.63} height={28} />
                    <p className="text-2xl self-center">دکتر <span className="text-blue-500">رزور</span></p>
                </div>
                {/* links */}
                <ul className="hidden md:flex md:gap-3 lg:gap-6 xl:gap-12 text-body-m text-neutral-950 font-Regular">
                    <li>
                        <Link href="/">
                            لیست پزشکان
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            سوالات متداول
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            درباره ما
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            تماس با ما
                        </Link>
                    </li>
                </ul>
                {/* login / register / profile */}
                <div className="flex gap-1 items-center md:gap-2 text-blue-500">
                    {isAuthenticated ? (
                        <>
                            <Image className="self-end" src="/img/profile01.jpg" alt="user" width={26} height={26} />
                            <Link className="text-caption-xl text-neutral-950 font-Regular" href="/profile">
                                پروفایل
                            </Link>
                        </>
                    ) : (
                        <Link className="text-xs font-medium" href="/">
                            ورود / ثبت نام
                        </Link>
                    )}
                </div>
            </header>
            {/* mobile menu */}
            <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:hidden transition-all duration-700 w-60 h-dvh py-5 px-4 flex-col gap-6 absolute top-14 bg-white p-4 rounded-md shadow-lg font-medium text-body-s child:flex child:justify-between child:items-center`}>
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    لیست پزشکان
                    <MdKeyboardArrowLeft size={24}/>
                </Link>
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    سوالات متداول
                    <MdKeyboardArrowLeft size={24}/>
                </Link>
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    درباره ما
                    <MdKeyboardArrowLeft size={24}/>
                </Link>
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    تماس با ما
                    <MdKeyboardArrowLeft size={24}/>
                </Link>
            </div>
        </>
    )
}
