"use client";

import { useDispatch, useSelector } from "react-redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/lib/feature/globalState";
import { Bell, Menu, Moon, Search, Settings, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    const dispatch = useDispatch();
    const isSidebarCollapsed = useSelector((state) => state.global.isSidebarCollapsed);
    const isDarkMode = useSelector((state) => state.global.isDarkMode);

    const toggleSidebar = () => {
        dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
    };

    const toggleDarkMode = () => {
        dispatch(setIsDarkMode(!isDarkMode));
    };

    return (
        <section className="flex justify-between items-center w-full mb-7">
            {/* LEFT SIDE */}
            <div className="flex justify-between items-center gap-8 md:gap-5">
                <button
                    className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
                    onClick={toggleSidebar}
                >
                    <Menu className="w-4 h-4" />
                </button>

                <div className="relative">
                    <input
                        type="search"
                        placeholder="Start type to search groups & products"
                        className="pl-10 pr-4 py-2 w-48 md:w-60 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
                    />

                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-non">
                        <Search className="text-gray-500" size={20} />
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex justify-between items-center gap-5">
                <div className="hidden md:flex justify-between items-center gap-5">
                    <div>
                        <button onClick={toggleDarkMode}>
                            {isDarkMode ? (
                                <Sun className="cursor-pointer text-gray-500" size={24} />
                            ) : (
                                <Moon className="cursor-pointer text-gray-500" size={24} />
                            )}
                        </button>
                    </div>
                    <div className="relative">
                        <Bell className="cursor-pointer text-gray-500" size={24} />
                        <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
                            3
                        </span>
                    </div>
                    <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
                    <div className="flex items-center gap-3 cursor-pointer">
                        <Image
                            src="https://img.freepik.com/vecteurs-libre/conception-du-logo-golden-bird_1195-336.jpg?t=st=1728314020~exp=1728317620~hmac=5048c001ceaa49209d8b7bbc5300876140395b9b1b2520427a15725b6e7390ac&w=740"
                            alt="Profile"
                            width={50}
                            height={50}
                            className="rounded-full h-full object-cover"
                        />
                        <span className="font-semibold">Ed Roh</span>
                    </div>
                </div>
                <Link href="/settings">
                    <Settings className="cursor-pointer text-gray-500" size={24} />
                </Link>
            </div>
        </section>
    );
};

export default Navbar;
