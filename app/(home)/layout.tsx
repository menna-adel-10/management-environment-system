import React, { ReactNode } from "react"
import Sidebar from "../components/Sidebar"


export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="block md:flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="md:flex-1 p-6">{children}</div>
    </div>
  )
}
