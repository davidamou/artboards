const Card = ({
  id,
  icon,
  color,
  title,
  content,
}: {
  id?: string
  icon: any
  color: string
  title: string
  content: string
}) => {
  return (
    <div id={id} className="p-8 bg-gray-100 rounded-2xl">
      <div className={`p-2 ${color} rounded-lg w-max`}>{icon}</div>
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm mb-10 xl:mb-28">{content}</p>
    </div>
  )
}

export default Card
