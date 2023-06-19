import Link from "next/link"
import Button from "./button"

const Header = () => {
  return (
    <header className="border-b lg:mx-24 py-4 mx-4 flex items-center justify-between text-sm">
      <Link className="font-extrabold text-2xl" href="/">
        Davcode
      </Link>
      <div className="lg:flex space-x-10 text-gray-600 hidden">
        <Link href="/">About us</Link>
        <Link href="/">Artboads</Link>
        <Link href="/">Contact us</Link>
        <Link href="/">Pricing</Link>
        <Link href="/">FAQ</Link>
      </div>
      <Button>Try robot for free</Button>
    </header>
  )
}
export default Header
