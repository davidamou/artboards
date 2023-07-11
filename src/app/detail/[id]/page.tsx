"use client"
/* eslint-disable @next/next/no-img-element */
import Avatar from "@/app/components/avatar"
import Header from "@/app/components/header"
import { Loading } from "@/app/components/loading"
import Seller from "@/app/models/seller"
import SellerProvider from "@/app/provider/seller_provider"
import { useEffect, useState } from "react"

const About = ({ params }: { params: { id: string } }) => {
  const [seller, setSeller] = useState<Seller | null>()
  useEffect(() => {
    const fetchData = async () => {
      const data = await SellerProvider.findOne(params.id[0])
      setSeller(data)
    }
    fetchData()
  }, [params.id])
  return (
    <div>
      <Header />
      {seller == null ? (
        <div className="h-screen w-full justify-center flex items-center">
          <Loading />
        </div>
      ) : (
        <div className=" lg:w-3/4 lg:mx-auto mt-20 flex md:w-full m-4 flex-col-reverse lg:flex-row overflow-hidden">
          <div className="lg:w-2/4 lg:h-1/5">
            <img
              alt={seller.title}
              src={seller.productImage}
              className="mt-8 object-cover w-full h-full"
            />
          </div>
          <div className="lg:m-8 lg:w-3/4 text-justify">
            <div className="mt-4 lg:mt-0">
              <Avatar url={seller.photourl} className="w-12 h-12 " />
              <p className="text-2xl font-bold mt-2">{seller.name}</p>
            </div>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam.
            </p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, voluptate, quia voluptas quod quos Lorem
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default About
