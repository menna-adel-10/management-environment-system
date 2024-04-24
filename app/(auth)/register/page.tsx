import { getServerSession } from "next-auth"
import LoginForm from "../../components/AuthFom"
import AuthLogo from "@/app/components/AuthLogo"
import { redirect } from "next/navigation"
import { authOptions } from "@/app/utils/auth"

export default async function Register() {
  const session = await getServerSession(authOptions)

  if (session) {
    return redirect("/dashboard")
  }
  return (
    <div className="min-h-screen flex relative bg-[#fff]">
      <AuthLogo />
      <div className="w-full md:w-[30%] items-center m-auto justify-center">
        <LoginForm
          buttonText="Register"
          linkText="Login"
          stateText="Already have an account?"
          navigate="/login"
        />
      </div>
    </div>
  )
}
