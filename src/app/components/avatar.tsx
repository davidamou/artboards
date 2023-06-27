/* eslint-disable @next/next/no-img-element */
const Avatar = ({ url, className }: { url: string; className?: string }) => {
  return (
    <div className={className + " rounded-full overflow-hidden"}>
      <img className="object-cover w-full h-full" src={url} alt="av2" />
    </div>
  )
}

export default Avatar
