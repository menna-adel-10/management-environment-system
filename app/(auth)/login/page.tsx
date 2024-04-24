import LoginForm from "../../../components/AuthFom"
import AuthLogo from "@/components/AuthLogo"

const Login = () => {
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

export default Login
