"use client"
import SellerCard from "./components/seller_card"
import { useEffect, useState } from "react"
import SellerProvider from "@/app/provider/seller_provider"
import Seller from "@/app/models/seller"
import { Loading } from "@/app/components/loading"

const BestArtBoardSellers = () => {
  const [sellers, setSellers] = useState(Array<Seller>)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchSellers = async () => {
      setIsLoading(true)
      const data = await SellerProvider.getSellers()
      setIsLoading(false)
      setSellers(data)
    }
    fetchSellers()
  }, [])

  const getSellers = () => (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
      {sellers.map((seller) => {
        return (
          <SellerCard
            key={seller.id}
            seller={seller}
          />
        )
      })}
    </div>
  )

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-center font-bold text-4xl mb-12">
        Best Art-board sellers
      </h2>
      {sellers.length == 0 ? <Loading /> : getSellers()}
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
