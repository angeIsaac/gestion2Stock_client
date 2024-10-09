"use client";

import { useDispatch, useSelector } from "react-redux";
import { setIsSidebarCollapsed } from "@/lib/feature/globalState";
import {
    Archive,
    CircleDollarSign,
    Clipboard,
    Layout,
    Menu,
    User,
    ShoppingBag,
    Truck,
    Handshake,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SidebarLink = ({ href, icon: Icon, label, isCollapsed }) => {
    const dispatch = useDispatch();
    const colapse = useSelector((state) => state.global.isSidebarCollapsed);
    const pathname = usePathname();
    const link = "/dashboard" + href;
    const isActive = pathname === link || (pathname === "/dashboard" && link === "/dashboard/");
    // onClick = {() => { dispatch(setIsSidebarCollapsed(!colapse)) }}
    return (
        <Link href={link} >
            <div
                className={`cursor-pointer flex items-center ${isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
                    }
        hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${isActive ? "bg-blue-200 text-white" : ""
                    }   
      `}
            >
                <Icon className="w-6 h-6 text-gray-700" />

                <span
                    className={`${isCollapsed ? "hidden" : "block"
                        } font-medium text-gray-700`}
                >
                    {label}
                </span>
            </div>
        </Link>
    );
};

const Sidebar = () => {
    const dispatch = useDispatch();
    const isSidebarCollapsed = useSelector((state) => state.global.isSidebarCollapsed
    );

    const toggleSidebar = () => {
        dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
    };

    const sidebarClassNames = `fixed flex flex-col ${isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
        } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

    return (
        <div className={sidebarClassNames}>
            {/* TOP LOGO */}
            <div
                className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isSidebarCollapsed ? "px-5" : "px-8"
                    }`}
            >
                <Image
                    src="https://img.freepik.com/vecteurs-libre/conception-du-logo-golden-bird_1195-336.jpg?t=st=1728314020~exp=1728317620~hmac=5048c001ceaa49209d8b7bbc5300876140395b9b1b2520427a15725b6e7390ac&w=740"
                    alt="EALE-logo"
                    width={27}
                    height={27}
                    className="rounded w-8"
                />
                <h1
                    className={`${isSidebarCollapsed ? "hidden" : "block"
                        } font-extrabold text-2xl`}
                >
                    EALE
                </h1>

                <button
                    className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
                    onClick={toggleSidebar}
                >
                    <Menu className="w-4 h-4" />
                </button>
            </div>

            {/* LINKS */}
            <div className="flex-grow mt-8">
                <SidebarLink
                    href="/"
                    icon={Layout}
                    label="Tableau de bord"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/products"
                    icon={Clipboard}
                    label="Produits"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/users"
                    icon={User}
                    label="Utitlisateurs"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/vente"
                    icon={CircleDollarSign}
                    label="Vente"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/achats"
                    icon={ShoppingBag}
                    label="Achat"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/fournisseur"
                    icon={Truck}
                    label="Fournisseur"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/client"
                    icon={Handshake}
                    label="Client"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/inventory"
                    icon={Archive}
                    label="Inventaire"
                    isCollapsed={isSidebarCollapsed}
                />
            </div>

            {/* FOOTER */}
            <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`}>
                <p className="text-center text-xs text-gray-500">&copy; 2024 EALE</p>
            </div>
        </div>
    );
};

export default Sidebar;
