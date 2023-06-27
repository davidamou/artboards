import Header from "./components/header"
import DesignBetter from "./pages/design_better/page"
import BestArtBoardSellers from "./pages/best_art_board_sellers/page"
import FirstPage from "./pages/first_page/page"

const Home = () => {
  return (
    <div className="mb-12">
      <Header />
      <div className="md:w-5/6 md:m-auto mx-5 mt-20">
        <FirstPage />
        <DesignBetter />
       <BestArtBoardSellers />
      </div>
    </div>
  )
}
export default Home
