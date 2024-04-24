import LoginForm from "../../../components/AuthFom"
import AuthLogo from "@/components/AuthLogo"

const Register = () => {
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

export default Register
