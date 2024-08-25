import Courses from "./Components/Courses/Courses"
import Hero from "./Components/Hero/Hero"
import Footer from "./Components/Footer/Footer"
import Instructor from "./Components/Instructor/Instructor"
import Navbar from "./Components/Navbar/Navbar"
import Steps from "./Components/Steps/Steps"
import './index.css'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Steps />
      <Courses />
      <Instructor/>
      <Footer/>
    </div>
  )
}

export default App
