"use client";
import Link from "next/link"
import logo from "../../public/assets/logo.svg"
import Image from "next/image"
import {
  LayoutGrid,
  Settings,
  Wrench,
  LogOut,
  Factory,
  Layers3,
  RefreshCcw,
} from "lucide-react"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react";

export default function Sidebar() {
  const pathname = usePathname()

  const links = [
    { href: "/dashboard", label: "Dashboard", icon: <LayoutGrid /> },
    { href: "/resources", label: "Resources", icon: <Layers3 /> },
    { href: "/manufacturing", label: "Manufacturing", icon: <Factory /> },
    { href: "/machines", label: "Machines", icon: <Wrench /> },
    { href: "/planning", label: "Planning", icon: <RefreshCcw /> },
    { href: "/settings", label: "Settings", icon: <Settings /> },
    { href: "/login", label: "Logout", icon: <LogOut /> },
  ]

  return (
    <div className="realtive min-h-screen md:flex">
      <div className="min-h-screen bg-primary text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out md:relative md:translate-x-0">
        <Link href="/" className="">
          <button className="text-white mx-auto flex item-center space-x-2 px-4">
            <div className="flex items-center gap-2">
              <Image priority src={logo} alt="Logo" width={25} height={25} />
              <span className="text-2xl font-extrabold">MES</span>
            </div>
          </button>
        </Link>

        <nav>
          {links.map((link, index) => {
            const isActive = pathname === link.href
            const isLastLink = index === links.length - 1

            const handleClick = () => {
              if (isLastLink) {
                signOut();
              }
            }

            return (
              <Link key={link.href} href={link.href}>
                <button
                  className={`flex gap-6 w-full mt-2 text-left py-2.5 px-4 rounded-r-full hover:bg-blue-700 text-[#D0D7DA] hover:text-white transition duration-300 ${
                    isActive ? "bg-blue-700 text-white" : ""
                  } ${isLastLink ? "mb-60" : ""} ${
                    index === links.length - 3 ? "mb-60" : ""
                  }`}
                  onClick={handleClick}
                >
                  <span className="w-4 h-4">{link.icon}</span>
                  <span>{link.label}</span>
                </button>
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
