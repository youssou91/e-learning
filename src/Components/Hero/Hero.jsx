import './Hero.css'
import { GiRapidshareArrow } from 'react-icons/gi'
import student from '../../assets/std2.jpg'
import student1 from '../../assets/std1.jpg'
import student2 from '../../assets/std3.jpg'
import student3 from '../../assets/std4.jpg'
import { easeInOut, motion } from 'framer-motion'

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          {/* lets animate the h1 content so it will slide from the left axis to the right axis */}
          <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: easeInOut}}
          exit={{opacity:0, x: -100, transition: {duration: 0.2}}}
          ><span>Empower</span> Your Future With Cutting-Edge <span>Skills</span></motion.h1>
          <p>Unlock your potentiel with corses designed to help you thrive in the digital age. From coding to creative arts, we provide the tools you need to succeed. </p>
          <div className="buttons"> 
            <a href="#" className="cta-button">Enroll Now</a>
            <a href="#" className="courses-button">Explore Our Courses</a>
          </div>
          <GiRapidshareArrow className='hero_icon'/>
        </div>
        <div className="hero-image">
          <div className="img-top">
            <img src={student} alt="" className='student_img' />
            <img src={student1} alt="" className='student_img_one' />
          </div>
          <div className="img-bottom">
            <img src={student2} alt="" className='student_img_two' />
            <img src={student3} alt="" className='student_img_three' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
