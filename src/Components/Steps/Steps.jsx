import { FcApproval, FcReadingEbook } from 'react-icons/fc'
import './Steps.css'
import { IoIosPeople } from 'react-icons/io'
import { motion } from 'framer-motion'


// Define the animation
export const slideUp = (delay)=>{
    return {
        hidden:{
            opacity: 0,
            y: 100
        },
        show:{
            opacity: 1,
            y: 0,
            transition: {
                duration:0.5,
                delay:delay,
                ease: 'easeInOut',
            }
        }
    }
}

const Steps = () => {
  return (
    <div>
        <div className="steps">
            <h2>Our Steps</h2>
            <div className="step">
                {/* lest animate each step !!  */}
                <motion.div 
                variants={slideUp(0.2)}
                initial="hidden"
                whileInView="show"
                className="step-list">
                    <FcReadingEbook className='icon' />
                    <div className="content">
                        <h3>Interactive Learning</h3>
                        <p>Engage whith hands-on projects and real-wordscenarios and learn from industy leaders and seasonned professionals</p>
                    </div>
                </motion.div>
                <motion.div 
                variants={slideUp(0.6)}
                initial="hidden"
                whileInView="show"
                className="step-list">
                    <FcApproval className='icon' />
                    <div className="content">
                        <h3>Accredited Programs</h3>
                        <p>Gain skills that make you stant out of the job market and earn certifications that are recognized by employers wordwide.</p>
                    </div>
                </motion.div>
                <motion.div 
                variants={slideUp(1.1)}
                initial="hidden"
                whileInView="show"
                className="step-list">
                    <IoIosPeople className='icon' />
                    <div className="content">
                        <h3>Supportive Community</h3>
                        <p>Connect with follow students and mentors across the globe to stay updated with the latest trends and technologies</p>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Steps