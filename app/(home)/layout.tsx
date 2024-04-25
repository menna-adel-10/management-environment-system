import React, { ReactNode } from "react"
import Sidebar from "../components/Sidebar"
import { getServerSession } from "next-auth"
import { authOptions } from "../utils/auth"
import { redirect } from "next/navigation";


export default async function MainLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect('/login')
  } 
  
  return (
    <div className="block md:flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="md:flex-1">{children}</div>
    </div>
  )
}
