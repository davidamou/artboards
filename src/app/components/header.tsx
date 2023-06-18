import Link from "next/link"

const Header = () => {
  return (
    <header>
      <div className="py-4 mx-24 border-b flex justify-between items-center">
        <Link href="/">
          <h1 className="text-3xl font-extrabold">Davidcode</h1>
        </Link>
        <div>
          <Link className="mr-6" href="/about">
            About us
          </Link>
          <Link className="mr-6" href="/about">
            Artboards
          </Link>
          <Link className="mr-6" href="/about">
            Contact us
          </Link>
          <Link className="mr-6" href="/about">
            Pricing
          </Link>
          <Link className="mr-6" href="/about">
            FAQ
          </Link>
        </div>
        <button className=" text-sm px-4 py-2 text-white bg-black rounded-full">
          Try reboot for free
        </button>
      </div>
    </header>
  )
}
export default Header
