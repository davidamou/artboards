import FirstPage from "./first_page/page"
import Header from "./components/header"
import DesignBetter from "./design_better/page"

const Home = () => {
  return (
    <div className="mb-12">
      <Header />
      <div className="md:w-5/6 md:m-auto mx-5">
        <FirstPage />
        <DesignBetter />
      </div>
    </div>
  )
}
export default Home
