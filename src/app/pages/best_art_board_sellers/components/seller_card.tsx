import Avatar from "@/app/components/avatar"
import Seller from "@/app/models/seller"
import { useRouter } from "next/navigation"

/* eslint-disable @next/next/no-img-element */
const SellerCard = ({ seller }: { seller: Seller }) => {
  const router = useRouter()
  return (
    <div
      onClick={() => router.push(`/detail/${seller.id}}`)}
      className="rounded-2xl bg-gray-50 border overflow-hidden hover:shadow-2xl hover:scale-105 transition"
    >
      <div className="h-64 bg-gray-100 flex flex-col justify-center items-center relative">
        <img
          src={seller.productImage}
          alt={seller.name}
          className="object-cover h-full w-full"
        />
        <Avatar
          url={seller.photourl}
          className="w-16 h-16 absolute ring-2 ring-gray-100 -bottom-8"
        />
      </div>

      <div className="p-12 text-center">
        <h3 className="font-bold text-lg">{seller.name}</h3>
        <p className="text-gray-600 text-sm">{seller.title}</p>
      </div>
    </div>
  )
}

export default SellerCard
