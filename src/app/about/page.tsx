import Header from "@/app/components/header"
import Head from "next/head"

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div>
        <Header />
        <div className="md:w-5/6 md:mx-auto mx-5 mt-20">
          <h1 className="text-3xl font-bold mt-40">About</h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, voluptate, quia voluptas quod quos
          </p>
        </div>
      </div>
    </>
  )
}

export default About
