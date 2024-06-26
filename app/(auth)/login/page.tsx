import { getServerSession } from "next-auth"
import LoginForm from "../../components/AuthFom"
import AuthLogo from "@/app/components/AuthLogo"
import { authOptions } from "@/app/utils/auth"
import { redirect } from "next/navigation"

export default async function Login() {
  const session = await getServerSession(authOptions)

  if (session) {
    return redirect("/dashboard")
  }

  return (
    <div className="min-h-screen flex relative bg-[#fff]">
      <AuthLogo />
      <div className="w-full md:w-[30%] bg-white items-center m-auto justify-center">
        <LoginForm
          buttonText="Login"
          linkText="Register"
          stateText="No account?"
          navigate="/register"
        />
      </div>
    </div>
  )
}
