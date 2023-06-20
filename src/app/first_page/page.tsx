import Image from "next/image"
import Avatar from "../components/avatar"
import Button from "../components/button"

const FirstPage = () => {
  return (
    <div className="lg:h-screen flex flex-col items-center justify-center lg:overflow-hidden mt-24 lg:mt-10">
      <div>
        <h1 className="md:w-5/6 m-auto text-6xl lg:text-7xl font-bold flex flex-wrap items-center">
          Explore Creative{" "}
          <span className="text-lg lg:text-2xl ml-3 -space-x-2 overflow-hidden">
            <span className="bg-white p-2 w-12 h-12 border rounded-full ring-2 ring-white">
              🇫🇷
            </span>
            <span className="bg-white p-2 border rounded-full ring-2 ring-white">
              🇺🇲
            </span>
            <span className="bg-white p-2 border rounded-full ring-2 ring-white">
              🇹🇬
            </span>
          </span>
          Artboartds
          <span className="flex ml-2 items-center justify-center w-36 text-xl font-normal bg-gray-100 p-2 rounded-full">
            🔥
            <span className="text-xs font-normal bg-gray-100 rounded-2xl">
              <div>our active</div>
              <div>monthly users</div>
            </span>
          </span>
          Generated by AI
        </h1>
        <div className="mt-16 relative">
          <div className="flex items-center absolute left-0 right-0 -top-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <div className="border p-2 rounded-xl bg-white">
              <Button>Schedule a meet</Button>
            </div>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-4">
            <div className="flex-initial lg:w-1/4 mt-10">
              <p className="text-gray-600">
                Find, explore and generate in an awesome place one
              </p>
              {avatars()}

              <Image
                className="rounded-full mt-4"
                src="/images/champignon.jpg"
                width={25000}
                height={25000}
                alt="champignon"
              />

              <p className="text-center mt-2 text-gray-600">
                Sample of our designs
              </p>
            </div>

            <Image
              className="rounded-2xl flex-initial lg:w-2/4 -order-1 lg:order-none"
              width={25000}
              height={25000}
              src="/images/couleur.jpg"
              alt="couleur"
            />

            <div className="flex-initial lg:w-1/4">
              <div className="flex items-center">
                <div className="-space-x-2 flex">
                  <Avatar
                    className="w-12 h-12 ring-2 ring-white"
                    url="https://img.freepik.com/icones-gratuites/pomme_318-432131.jpg?size=626&ext=jpg&uid=R32696892&ga=GA1.1.1821266011.1685032239&semt=ais"
                  />
                  <Avatar
                    className="-ml-4 w-12 h-12 ring-2 ring-white"
                    url="https://cdn-icons-png.flaticon.com/512/91/91973.png?w=740&t=st=1687045535~exp=1687046135~hmac=1ac14be0873a561673eafd1e5f459ed0206bb819f129902a9f38ac40fe4e4552 "
                  />
                </div>
                <p className="ml-3">Services available</p>
              </div>
              <h2 className="text-xl mt-8 font-semibold">+120K</h2>
              <p className="text-gray-600">Our active monthly users</p>
              <h2 className="text-xl font-semibold mt-4">+120K</h2>
              <p className="text-gray-600">Our monthly anboards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const avatars = () => {
  return (
    <div className="flex mt-2 -space-x-2">
      <Avatar
        className="w-12 h-12 ring-1 ring-white"
        url="https://img.freepik.com/psd-gratuit/illustration-3d-personne-lunettes-soleil_23-2149436180.jpg"
      />
      <Avatar
        className="w-12 h-12 ring-1 ring-white"
        url="https://img.freepik.com/psd-gratuit/illustration-3d-personne-lunettes_23-2149436185.jpg?w=740&t=st=1687038409~exp=1687039009~hmac=c8581fefd293b4970a7e892b9cdc86f87f04dbb8808036f36f864b3573b8e6f5"
      />
      <Avatar
        className="w-12 h-12 ring-1 ring-white"
        url="https://img.freepik.com/psd-gratuit/3d-illustration-personne_23-2149436192.jpg?w=740&t=st=1687038376~exp=1687038976~hmac=9c77587f16da3d6be77b7a46020d8959b044f730e0190ca1fa538d83c2ed2993"
      />
    </div>
  )
}
export default FirstPage
