import Avatar from "@/app/components/avatar"

/* eslint-disable @next/next/no-img-element */
const SellerCard = ({
  name,
  photoUrl,
  productImage,
  titre,
}: {
  name: string
  photoUrl: string
  productImage: string
  titre: string
}) => {
  return (
    <div className="rounded-2xl bg-gray-50 border overflow-hidden hover:shadow-2xl hover:scale-105 transition">
      <div className="h-64 bg-gray-100 flex flex-col justify-center items-center relative">
        <img
          src={productImage}
          alt={name}
          className="object-cover h-full w-full"
        />
        <Avatar
          url={photoUrl}
          className="w-16 h-16 absolute ring-2 ring-gray-100 -bottom-8"
        />
      </div>

      <div className="p-12 text-center">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-600 text-sm">{titre}</p>
      </div>
    </div>
  )
}

export default SellerCard
