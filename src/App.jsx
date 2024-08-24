import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Steps from "./Components/Steps/Steps"
import './index.css'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Steps />
    </div>
  )
}

export default App
