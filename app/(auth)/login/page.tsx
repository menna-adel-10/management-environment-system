import Image from "next/image"
import LoginForm from "../../../components/AuthFom"
import platform from "../../../public/assets/platform.svg"

const Login = () => {
  return (
    <div className="min-h-screen flex relative bg-[#fff]">
      <div className="hidden md:block lg:w-[70%] sm:w-[50%] bg-primary relative">
        <div className="m-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-lg text-center relative">
            <Image
              priority
              src={platform}
              alt="platform background"
              className="min-h-screen w-full"
            />
            <h3 className="lg:text-[30px] md:text-[20px] w-full font-semibold font-mont text-[#fff] absolute top-1/3 md:bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 lg:translate-y-1/4">
              One Platform For Managing all
            </h3>
            <h1 className="lg:text-[35px] md:text-[22px] w-full font-bold font-mont uppercase tracking-[-3] text-[#fff] absolute top-1/2 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/4">
              Manufacturing Aspects
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[30%] bg-white items-center m-auto justify-center">
        <LoginForm
          buttonText="Sign in"
          linkText="Sign up"
          navigate="/register"
        />
      </div>
    </div>
  )
}

export default Login
