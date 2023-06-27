"use client"
import Link from "next/link"
import Button from "./button"
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { useState } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header
      className={`border-b fixed bg-white z-50 top-0 left-0 right-0 ${
        isMenuOpen ? "h-full" : "h-max"
      }`}
    >
      <div className="md:w-5/6 lg:m-auto flex lg:items-center lg:flex-row lg:justify-between text-sm flex-col my-4">
        <div className="flex items-center lg:border-b-0 lg:p-0 mx-5 lg:mx-0 space-x-4">
          <button
            className="lg:hidden border p-0 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars2Icon className="h-8 w-8" />
            )}
          </button>
          <Link className="font-extrabold text-3xl" href="/">
            Davcode
          </Link>
        </div>

        <div
          className={`lg:flex-row lg:space-x-10 lg:text-gray-600 flex-col text-base space-y-6 lg:space-y-0 w-full lg:w-max py-4 ${
            isMenuOpen ? "flex" : "hidden lg:flex"
          }`}
        >
          <Link className="px-5 lg:p-0 py-1" href="/about">
            About us
          </Link>
          <Link className="px-5 lg:p-0 py-1" href="#seconde">
            Artboads
          </Link>
          <Link className="px-5 lg:p-0 py-1" href="/">
            Contact us
          </Link>
          <Link className="px-5 lg:p-0 py-1" href="/">
            Pricing
          </Link>
          <Link className="px-5 lg:p-0 py-1" href="/">
            FAQ
          </Link>
        </div>
        <div className={`m-4 ${isMenuOpen ? "" : "hidden lg:flex"}`}>
          <Button onClick={() => alert("hello")}>Try robot for free</Button>
        </div>
      </div>
    </header>
  )
}
export default Header
