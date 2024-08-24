import { FcApproval, FcReadingEbook } from 'react-icons/fc'
import './Steps.css'
import { IoIosPeople } from 'react-icons/io'

const Steps = () => {
  return (
    <div>
        <div className="steps">
            <div className="step">
                <div className="step-list">
                    <FcReadingEbook className='icon' />
                    <div className="content">
                        <h3>Interactive Learning</h3>
                        <p>Engage whith hands-on projects and real-wordscenarios and learn from industy leaders and seasonned professionals</p>
                    </div>
                </div>
                <div className="step-list">
                    <FcApproval className='icon' />
                    <div className="content">
                        <h3>Accredited Programs</h3>
                        <p>Gain skills that make you stant out of the job market and earn certifications that are recognized by employers wordwide.</p>
                    </div>
                </div>
                <div className="step-list">
                    <IoIosPeople className='icon' />
                    <div className="content">
                        <h3>Supportive Community</h3>
                        <p>Connect with follow students and mentors across the globe to stay updated with the latest trends and technologies</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Steps