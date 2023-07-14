import About from "./About"
import Chef from "./Chef"
import Header from "./Header"
import Intro from "./Intro"
import SpecialMenu from "./SpecialMenu"

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <SpecialMenu />
      <Chef />
      <Intro />
    </div>
  )
}

export default Home