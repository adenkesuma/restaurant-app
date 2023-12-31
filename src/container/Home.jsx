import About from "./About"
import Chef from "./Chef"
import FindUs from "./FindUs"
import Gallery from "./Gallery"
import Header from "./Header"
import Intro from "./Intro"
import Laurels from "./Laurels"
import SpecialMenu from "./SpecialMenu"
import Newsletter from "../components/Newsletter"

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Newsletter />
    </div>
  )
}

export default Home