import './Instructor.css'
import man from '../../assets/std4.jpg'
import { easeInOut, motion } from 'framer-motion'

const slideRight = (delay)=>{
  return {
   hidden:{opacity:0, x:-100},
   show:{opacity:1, x:0},
   transition:{duration:0.5, delay:delay, ease:easeInOut}
  }
}

const Instructor = () => {
  return (
    <div>
        <div className="instructor">
          <div className="left">
            <motion.img
            variants={slideRight(0.2)}
            initial="hidden"
            whileInView="show"
            src= {man} alt="amelia earhart" />
          </div>
          <motion.div
          variants={slideRight(0.9)}
          initial="hidden"
          whileInView="show"
          className="right">
            <h2>Become An Instructor</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis odio minima voluptates rerum quasi nemo magnam velit rem nihil, sequi animi similique officia aperiam. Perferendis alias odit tempore veniam voluptas!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis odio minima voluptates rerum quasi nemo magnam velit rem nihil, sequi animi similique officia aperiam. Perferendis alias odit tempore veniam voluptas!</p>
            <button>Register Now </button>
          </motion.div>
        </div>
    </div>
  )
}

export default Instructor