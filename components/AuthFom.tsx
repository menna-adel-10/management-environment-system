import Image from "next/image"
import factoryIcon from "../public/assets/factoryIcon.svg"
import Link from "next/link"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import GoogleIcon from "../public/assets/google.svg"
import { FaGithub } from "react-icons/fa"

const AuthForm = ({ buttonText, linkText, navigate, stateText }) => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <div className="inline-flex gap-3">
          <Image priority src={factoryIcon} alt="Follow us on Twitter" />
          <h1 className="text-2xl font-bold sm:text-3xl text-primary">MES</h1>
        </div>
        <div className="flex w-full justify-center items-center gap-x-3 mt-5">
          <Button
            variant="outline"
            size="icon"
            className="hover:bg-slate-100 rounded-full"
          >
            <FaGithub className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="hover:bg-slate-100 rounded-full"
          >
            <Image src={GoogleIcon} alt="Google Icon" />
          </Button>
        </div>
      </div>

      <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>

          <div className="relative">
            <Input
              type="email"
              className="w-full rounded-full focus:ring-primary focus:border-transparent border-primary p-4 pe-12 text-sm shadow-md"
              placeholder="Enter email"
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>

          <div className="relative">
            <Input
              type="password"
              className="w-full rounded-full focus:ring-primary focus:border-transparent border-primary p-4 pe-12 text-sm shadow-md"
              placeholder="Enter password"
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="flex md:block items-center justify-between">
          <Link href="/dashboard">
            <Button
              type="submit"
              className="md:w-full justify-center relative inline-flex h-fit w-fit rounded-full border border-primary-100/20 bg-primary px-4 py-2 text-[#fff] outline-none ring-slate-50 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-slate-50 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-slate-50/40 hover:text-slate-50 after:hover:bg-opacity-15 focus:ring-2"
            >
              {buttonText}
            </Button>
          </Link>

          <p className="text-sm text-gray-500 mt-3 md:float-right">
            {stateText}
            <Link
              href={navigate}
              className="hover:underline text-primary mx-1 hover:opacity-90"
            >
              {linkText}
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default AuthForm
