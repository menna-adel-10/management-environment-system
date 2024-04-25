import { getServerSession } from "next-auth"
import React, { ReactNode } from "react"
import { authOptions } from "../utils/auth"
import { redirect } from "next/navigation"

export default async function AuthLayout({
  children,
}: {
  children: ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (session) {
    return redirect("/dashboard")
  }

  return <div>{children}</div>
}
