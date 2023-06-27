"use client"
import SellerCard from "./components/seller_card"
import { useEffect, useState } from "react"
import SellerProvider from "@/app/provider/seller_provider"
import Seller from "@/app/models/seller"

const BestArtBoardSellers = () => {
  const [sellers, setSellers] = useState(Array<Seller>)
  useEffect(() => {
    const fetchSellers = async () => {
      const data = await SellerProvider.getSellers()
      setSellers(data)
    }
    fetchSellers()
  }, [sellers])
  return (
    <div className="flex flex-col justify-center items-center mt-12">
      <h2 className="text-center font-bold text-4xl mb-8">
        Best Art-board sellers
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        {sellers.map((seller) => {
          return (
            <SellerCard
              key={seller.id}
              name={seller.name}
              photoUrl={seller.photourl}
              productImage={seller.productImage}
              titre={seller.title}
            />
          )
        })}
      </div>
      <p className="mt-8 text-gray-700">
        We geneeate visual ideals in 30 seconds so explore and Generate your
        ideas in awesomeplace I generate ideals in to visual photos and videos.
        We geneeate visual ideals in 30 seconds so explore and Generate your
        ideas in awesomeplace I generate ideals in to visual photos and videos.
      </p>
    </div>
  )
}

export default BestArtBoardSellers
