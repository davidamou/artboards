const Button = ({ children }: { children: any }) => {
    return (
        <div className="px-4 py-2 bg-black text-white rounded-full w-max">
            {children}
        </div>
    )
}

export default Button