import { MouseEventHandler } from "react"

const Button = ({ children, onClick }: { children: any, onClick?:MouseEventHandler }) => {
    return (
      <button onClick={onClick} className="px-4 py-2 bg-black text-white rounded-full w-max hover:bg-black/80">
        {children}
      </button>
    )
}

export default Button