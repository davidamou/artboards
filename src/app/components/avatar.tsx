/* eslint-disable @next/next/no-img-element */
const Avatar = (props:{url: string, className: string}) => {
  return (
    <div className={props.className + " rounded-full overflow-hidden"}>
      <img
        className="object-cover"
        src={props.url}
        alt="av2"
      />
    </div>
  )
}

export default Avatar
