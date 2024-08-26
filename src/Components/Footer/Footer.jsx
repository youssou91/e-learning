import { FaFacebook } from 'react-icons/fa'
import './Footer.css'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { slideUp } from '../Steps/Steps'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <div>
        <div className="footer">
            <div className="container">
                <motion.div
                variants={slideUp(0.7)}
                initial="hidden"
                whileInView="show"
                className="footer_details">
                    <h1>EDUKATIVE</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum, mi vel fringilla ultricies, justo enim malesuada lectus, at pellentesque nisi velit id enim. Sed non urna id lectus consequat.</p>
                </motion.div>
                <motion.div
                variants={slideUp(1.1)}
                initial="hidden"
                whileInView="show"
                className="footer_links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li>Home</li>
                        <li>Course</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>
                </motion.div>
                <motion.div
                variants={slideUp(1.3)}
                initial="hidden"
                whileInView="show"
                className="social_media">
                    <h2>Connect With Us</h2>
                    <div className="icons">
                        <FaFacebook className="footer_icon"/>
                        <BsInstagram className="footer_icon"/>
                        <BsTwitter className="footer_icon"/>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Footer