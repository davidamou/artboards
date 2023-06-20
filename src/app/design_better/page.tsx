import Card from "./components/card"
import {
  PaperAirplaneIcon,
  FolderIcon,
  HeartIcon,
} from "@heroicons/react/24/solid"

const DesignBetter = () => {
  return (
    <div className="mt-24 lg:h-screen flex flex-col items-center justify-center lg:overflow-hidden">
      <h2 className="text-center font-bold text-4xl mb-10">
        {"Let's design better"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Card
          icon={<PaperAirplaneIcon className="h-6 w-6 text-white -rotate-45" />}
          title="Generate speed"
          content="You have access to a lot of designs, you can generate a lot of designs in a short time"
          color="bg-orange-400"
        />
        <Card
          icon={<FolderIcon className="h-6 w-6 text-white" />}
          title="Generate speed"
          content="You have access to a lot of designs, you can generate a lot of designs in a short time"
          color="bg-pink-600"
        />
        <Card
          icon={<HeartIcon className="h-6 w-6 text-white" />}
          title="Generate speed"
          content="You have access to a lot of designs, you can generate a lot of designs in a short time"
          color="bg-blue-700"
        />
      </div>
      <p className="mt-6" id="seconde">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        reiciendis, expedita sapiente magnam temporibus nam distinctio suscipit
        beatae ducimus. Eos suscipit nostrum quidem repudiandae maxime, nulla
        natus in voluptas alias?
      </p>
    </div>
  )
}

export default DesignBetter
